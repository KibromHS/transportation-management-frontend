import React, { useState, useRef, useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useMessages } from "@/hooks/useMessages";
import { Message } from "@/api/messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MessageSquare,
  Send,
  Plus,
  Users,
  Search,
  ChevronLeft,
  MoreVertical,
  UserPlus,
  Paperclip,
  Image,
  File,
  Smile,
  Phone,
  Video,
  Info,
  Star,
  Bell,
  BellOff,
  Trash2,
  ArrowUpRight,
  CheckCheck,
  Clock,
  Filter,
  X,
} from "lucide-react";
import { format, isToday, isYesterday, isThisWeek } from "date-fns";
import { User } from "@/api/users";
import { useUsers } from "@/hooks/useUsers";
import { getRequest } from "@/api/request";

interface Conversation {
  roomId: string;
  chatId: string;
  dispatcherId: string;
  lastMessage: string;
  timestamp: number;
}

interface ChatInterfaceProps {
  className?: string;
  onClose?: () => void;
  initialConversation?: Conversation;
  standalone?: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  className = "",
  onClose,
  initialConversation,
  standalone = false,
}) => {
  const { user } = useAuthContext();
  const userId = user?.id || "";
  const {
    conversations,
    currentConversation,
    messages,
    loading,
    loadConversations,
    startDirectConversation,
    sendMessage,
    selectConversation,
  } = useMessages(user.id.toString());

  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewGroupDialog, setShowNewGroupDialog] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>(
    []
  );
  const [showConversationList, setShowConversationList] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [drivers, setDrivers] = useState([]);

  const fetchDrivers = async () => {
    try {
      const response = await getRequest(
        `${import.meta.env.VITE_API_URL}/drivers`
      );
      const data = await response.json();
      if (response.ok) {
        setDrivers(data.data);
      }
    } catch (e) {
      console.error("Error fetching drivers", e);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  // Set initial conversation if provided
  useEffect(() => {
    if (initialConversation) {
      selectConversation(initialConversation);
      setShowConversationList(false);
    }
  }, [initialConversation, selectConversation]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Filter conversations based on search query and active filter
  const filteredConversations = conversations.filter((conversation) => {
    if (searchQuery) {
      const driverId = conversation.roomId.split("_")[1];
      const driver = drivers.find((d) => d.id == driverId);
      if (!driver?.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
    }
    return true;
  });

  const groupedConversations = filteredConversations.reduce<
    Record<string, Conversation[]>
  >((groups, conversation) => {
    if (!conversation.lastMessage) {
      const group = groups["No messages"] || [];
      return { ...groups, "No messages": [...group, conversation] };
    }

    const date = new Date(conversation.timestamp);
    let groupName: string;

    if (isToday(date)) {
      groupName = "Today";
    } else if (isYesterday(date)) {
      groupName = "Yesterday";
    } else if (isThisWeek(date)) {
      groupName = "This Week";
    } else {
      groupName = "Older";
    }

    const group = groups[groupName] || [];
    return { ...groups, [groupName]: [...group, conversation] };
  }, {});

  // Handle sending a message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim() || !currentConversation) return;

    await sendMessage(messageText);
    setMessageText("");
  };

  const getConversationName = (conversation: Conversation) => {
    const driverId = conversation.roomId.split("_")[1];
    const driver = drivers.find((d) => d.id == driverId);
    return driver?.name;
  };

  const getConversationAvatar = (conversation: Conversation) => {
    const driverId = conversation.roomId.split("_")[1];
    const driver = drivers.find((d) => d.id == driverId);
    return driver?.avatar;
  };

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  // Format message timestamp
  const formatMessageTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();

    if (isToday(date)) {
      return format(date, "h:mm a");
    } else if (isYesterday(date)) {
      return "Yesterday";
    } else if (isThisWeek(date)) {
      return format(date, "EEEE"); // Day name
    } else {
      return format(date, "MMM d");
    }
  };

  // Format message timestamp for chat bubbles
  const formatChatMessageTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return format(date, "h:mm a");
  };

  // Render conversation list
  const renderConversationList = () => (
    <div className="flex flex-col h-full bg-background">
      <div className="p-4 border-b">
        {/* <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight">Messages</h2>
          {unreadCount > 0 && (
            <Badge className="bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm">
              {unreadCount}
            </Badge>
          )}
        </div> */}
        <div className="relative flex items-center">
          <Search className="ml-2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            className="pl-2 ml-2 transition-all focus-visible:ring-teal-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* <div className="flex items-center justify-between p-2 border-b">
        <div className="flex space-x-1 overflow-x-auto pb-1 scrollbar-hide">
          <Button
            variant={activeFilter === null ? "default" : "outline"}
            size="sm"
            className="text-xs rounded-full"
            onClick={() => setActiveFilter(null)}
          >
            All
          </Button>
          <Button
            variant={activeFilter === "unread" ? "default" : "outline"}
            size="sm"
            className="text-xs rounded-full"
            onClick={() => setActiveFilter("unread")}
          >
            Unread
          </Button>
          <Button
            variant={activeFilter === "groups" ? "default" : "outline"}
            size="sm"
            className="text-xs rounded-full"
            onClick={() => setActiveFilter("groups")}
          >
            Groups
          </Button>
          <Button
            variant={activeFilter === "direct" ? "default" : "outline"}
            size="sm"
            className="text-xs rounded-full"
            onClick={() => setActiveFilter("direct")}
          >
            Direct
          </Button>
        </div>
        <Dialog open={showNewGroupDialog} onOpenChange={setShowNewGroupDialog}>
          <DialogTrigger asChild>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Plus className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>New conversation</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Group</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="group-name">Group Name</Label>
                <Input
                  id="group-name"
                  placeholder="Enter group name"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label>Select Participants</Label>
                <ScrollArea className="h-[200px] border rounded-md p-2">
                  {drivers.map((d) => (
                    <div
                      key={d.id}
                      className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md"
                    >
                      <Avatar className="h-8 w-8">
                        {d.avatarUrl ? (
                          <AvatarImage src={d.avatarUrl} />
                        ) : (
                          <AvatarFallback>
                            {getInitials(d.name || "Driver")}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <Label
                        htmlFor={`driver-${d.id}`}
                        className="cursor-pointer"
                      >
                        {d.name}
                      </Label>
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowNewGroupDialog(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleCreateGroup}>Create Group</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div> */}

      <ScrollArea className="flex-1">
        {filteredConversations.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">
            {searchQuery
              ? "No conversations found"
              : "No conversations yet. Start a new chat!"}
          </div>
        ) : (
          Object.entries(groupedConversations).map(
            ([groupName, groupConversations]) => (
              <div key={groupName} className="mb-2">
                <div className="px-4 py-2 text-xs font-medium text-muted-foreground">
                  {groupName}
                </div>
                {groupConversations.map((conversation) => {
                  const driverId = conversation.roomId.split("_")[1];
                  const driver = drivers.find((d) => d.id == driverId);
                  const conversationName = driver?.name || "Driver";
                  const avatar = driver?.avatar;
                  const lastMessage = conversation.lastMessage;
                  const hasUnread = false; // TODO: Implement unread tracking if needed

                  return (
                    <div
                      key={conversation.roomId}
                      className={`p-3 hover:bg-muted/50 cursor-pointer transition-colors ${
                        currentConversation?.roomId === conversation.roomId
                          ? "bg-muted"
                          : ""
                      }`}
                      onClick={() => {
                        selectConversation(conversation);
                        if (!standalone) {
                          setShowConversationList(false);
                        }
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10 border">
                          {avatar ? (
                            <AvatarImage src={avatar} />
                          ) : (
                            <AvatarFallback className="bg-gradient-to-br from-teal-400 to-blue-500 text-white">
                              {getInitials(conversationName)}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium truncate">
                              {conversationName}
                            </p>
                            {conversation.timestamp && (
                              <span className="text-xs text-muted-foreground ml-2">
                                {formatMessageTime(
                                  new Date(conversation.timestamp).toISOString()
                                )}
                              </span>
                            )}
                          </div>
                          {lastMessage && (
                            <p className="text-sm text-muted-foreground truncate">
                              {lastMessage}
                            </p>
                          )}
                        </div>
                        {hasUnread && (
                          <Badge className="ml-2 h-2 w-2 rounded-full p-0 bg-teal-600" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )
          )
        )}
      </ScrollArea>

      {/* User selection for direct messages */}
      <div className="p-4 border-t">
        <h3 className="text-sm font-medium mb-2">Start a new conversation</h3>
        <Select
          onValueChange={(value) => {
            if (value) {
              startDirectConversation(value);
              if (!standalone) {
                setShowConversationList(false);
              }
            }
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select driver" />
          </SelectTrigger>
          <SelectContent>
            {drivers.map((d) => (
              <SelectItem key={d.id} value={d.id}>
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    {d.avatarUrl ? (
                      <AvatarImage src={d.avatarUrl} />
                    ) : (
                      <AvatarFallback className="text-xs">
                        {getInitials(d.name || "Driver")}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <span>{d.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  // Render chat view
  const renderChatView = () => {
    if (!currentConversation) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center text-muted-foreground">
          <MessageSquare className="h-12 w-12 mb-4 text-muted-foreground/50" />
          <h3 className="text-lg font-medium">No conversation selected</h3>
          <p>Select a conversation or start a new one</p>
        </div>
      );
    }

    const conversationName = getConversationName(currentConversation);
    const avatar = getConversationAvatar(currentConversation);

    // Group messages by date
    const groupedMessages = messages.reduce<Record<string, Message[]>>(
      (groups, message) => {
        const date = new Date(message.timestamp);
        let groupName: string;

        if (isToday(date)) {
          groupName = "Today";
        } else if (isYesterday(date)) {
          groupName = "Yesterday";
        } else {
          groupName = format(date, "MMMM d, yyyy");
        }

        const group = groups[groupName] || [];
        return { ...groups, [groupName]: [...group, message] };
      },
      {}
    );

    return (
      <div className="flex flex-col h-full bg-background">
        {/* Chat header */}
        <div className="p-3 border-b flex items-center justify-between bg-background/95 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            {!standalone && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowConversationList(true)}
                className="md:hidden"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            )}
            <Avatar className="h-10 w-10 border">
              {avatar ? (
                <AvatarImage src={avatar} />
              ) : (
                <AvatarFallback className="bg-gradient-to-br from-teal-400 to-blue-500 text-white">
                  {getInitials(conversationName)}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <h3 className="font-medium">{conversationName}</h3>
              {/* {currentConversation.isGroup ? (
                <p className="text-xs text-muted-foreground">
                  {currentConversation.participants.length} members
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">Online</p>
              )} */}
            </div>
          </div>
          <div className="flex items-center space-x-1">
            {/* <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Phone className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Call</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Video className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Video call</TooltipContent>
              </Tooltip>
            </TooltipProvider> */}

            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Info className="h-4 w-4 mr-2" />
                  <span>View info</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Star className="h-4 w-4 mr-2" />
                  <span>Add to favorites</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell className="h-4 w-4 mr-2" />
                  <span>Mute notifications</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="h-4 w-4 mr-2" />
                  <span>Delete conversation</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4 bg-gradient-to-b from-background to-muted/20">
          <div className="space-y-6">
            {messages.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                <p>No messages yet</p>
                <p className="text-sm">Start the conversation!</p>
              </div>
            ) : (
              Object.entries(groupedMessages).map(([date, dateMessages]) => (
                <div key={date} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-background px-2 text-muted-foreground">
                        {date}
                      </span>
                    </div>
                  </div>

                  {dateMessages.map((message) => {
                    const isCurrentUser = true; // Always dispatcher sending in this UI

                    return (
                      <div
                        key={message.id}
                        className={`flex ${
                          isCurrentUser ? "justify-end" : "justify-start"
                        }`}
                      >
                        {!isCurrentUser && (
                          <div className="w-8 mr-2 flex-shrink-0">
                            {/* If you later show driver messages, avatar logic goes here */}
                          </div>
                        )}

                        <div
                          className={`max-w-[75%] ${
                            isCurrentUser
                              ? "bg-teal-600 text-white"
                              : "bg-muted"
                          } ${
                            isCurrentUser
                              ? "rounded-tl-2xl rounded-tr-sm rounded-br-sm rounded-bl-2xl"
                              : "rounded-tl-sm rounded-tr-2xl rounded-br-2xl rounded-bl-sm"
                          } p-3 shadow-sm`}
                        >
                          <p className="whitespace-pre-wrap break-words">
                            {message.message}
                          </p>
                          <div className="flex items-center justify-end mt-1 space-x-1">
                            <p className="text-xs opacity-70">
                              {formatChatMessageTime(
                                new Date(message.timestamp).toISOString()
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Message input */}
        <div className="p-3 border-t bg-background">
          <form
            onSubmit={handleSendMessage}
            className="flex items-end space-x-2"
          >
            <div className="flex-1 relative">
              <Input
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="pr-10 min-h-[2.5rem] py-4"
                multiline
              />
              <div className="absolute right-2 bottom-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 rounded-full"
                      >
                        <Smile className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Add emoji</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div className="flex space-x-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <Paperclip className="h-5 w-5 text-muted-foreground" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Attach file</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button
                type="submit"
                size="icon"
                className="rounded-full"
                disabled={!messageText.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Main render
  return (
    <Card
      className={`${className} ${
        standalone
          ? "h-full"
          : "h-[600px] w-[350px] md:w-[600px] shadow-xl border-0"
      } overflow-hidden rounded-lg transition-all`}
    >
      {standalone ? (
        <div className="grid md:grid-cols-2 h-full">
          <div
            className={`${
              showConversationList ? "block" : "hidden"
            } md:block border-r`}
          >
            {renderConversationList()}
          </div>
          <div className={`${showConversationList ? "hidden" : "block"}`}>
            {renderChatView()}
          </div>
        </div>
      ) : (
        <div className="h-full">
          {showConversationList ? renderConversationList() : renderChatView()}
        </div>
      )}
    </Card>
  );
};

export default ChatInterface;
