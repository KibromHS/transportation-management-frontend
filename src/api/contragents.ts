export type ContragentType = "carrier" | "customer" | "facility" | "factoring";
export type ContragentStatus = "active" | "inactive" | "pending";

export interface Contragent {
  id: string;
  name: string;
  type: ContragentType;
  logo?: string;
  contact?: string;
  phone?: string;
  email?: string;
  location?: string;
  status: ContragentStatus;
  createdAt: string;
  updatedAt: string;

  // Carrier-specific fields
  fleetSize?: number;
  rating?: number;
  lastDelivery?: string;

  // Customer-specific fields
  totalOrders?: number;
  lastOrder?: string;
  accountValue?: string;

  // Facility-specific fields
  facilityType?: string;
  capacity?: string;
  dockDoors?: number;

  // Factoring-specific fields
  clientCount?: number;
  averageRate?: string;
  paymentTerms?: string;
}

/**
 * Get all contragents
 */
export const getAllContragents = async () => {
  try {
    // const { data, error } = await supabase
    //   .from("contragents")
    //   .select("*")
    //   .order("name");
    const {data, error} = {data: [{
      id: 'string',
  name: 'string',
  type: 'ContragentType',
  logo: 'string',
  contact: 'string',
  phone: 'string',
  email: 'string',
  location: 'string',
  status: 'ContragentStatus',
  createdAt: 'string',
  updatedAt: 'string',

  // Carrier-specific fields
  fleetSize: 20,
  rating: 20,
  lastDelivery: 'string',

  // Customer-specific fields
  totalOrders: 20,
  lastOrder: 'string',
  accountValue: 'string',

  // Facility-specific fields
  facilityType: 'string',
  capacity: 'string',
  dockDoors: 20,

  // Factoring-specific fields
  clientCount: 20,
  averageRate: 'string',
  paymentTerms: 'string',
    }], error: false};

    if (error) throw error;

    // Transform the data to match the frontend model
    const contragents: Contragent[] = data.map((contragent) => ({
      id: contragent.id,
      name: contragent.name,
      type: contragent.type as ContragentType,
      logo: contragent.logo,
      contact: contragent.contact,
      phone: contragent.phone,
      email: contragent.email,
      location: contragent.location,
      status: contragent.status as ContragentStatus,
      createdAt: contragent.createdAt,
      updatedAt: contragent.updatedAt,

      // Carrier-specific fields
      fleetSize: contragent.fleetSize,
      rating: contragent.rating,
      lastDelivery: contragent.lastDelivery,

      // Customer-specific fields
      totalOrders: contragent.totalOrders,
      lastOrder: contragent.lastOrder,
      accountValue: contragent.accountValue,

      // Facility-specific fields
      facilityType: contragent.facilityType,
      capacity: contragent.capacity,
      dockDoors: contragent.dockDoors,

      // Factoring-specific fields
      clientCount: contragent.clientCount,
      averageRate: contragent.averageRate,
      paymentTerms: contragent.paymentTerms,
    }));

    return { contragents };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Get contragents by type
 */
export const getContragentsByType = async (type: ContragentType) => {
  try {
    const { data, error } = {data: [], error: null};

    if (error) throw error;

    const contragents: Contragent[] = data.map((contragent) => ({
      id: contragent.id,
      name: contragent.name,
      type: contragent.type as ContragentType,
      logo: contragent.logo,
      contact: contragent.contact,
      phone: contragent.phone,
      email: contragent.email,
      location: contragent.location,
      status: contragent.status as ContragentStatus,
      createdAt: contragent.createdAt,
      updatedAt: contragent.updatedAt,

      // Type-specific fields
      fleetSize: contragent.fleetSize,
      rating: contragent.rating,
      lastDelivery: contragent.lastDelivery,
      totalOrders: contragent.totalOrders,
      lastOrder: contragent.lastOrder,
      accountValue: contragent.accountValue,
      facilityType: contragent.facilityType,
      capacity: contragent.capacity,
      dockDoors: contragent.dockDoors,
      clientCount: contragent.clientCount,
      averageRate: contragent.averageRate,
      paymentTerms: contragent.paymentTerms,
    }));

    return { contragents };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Get contragent by ID
 */
export const getContragentById = async (id: string) => {
  try {
    const { data, error } = {data: <Contragent><unknown>[], error: null};

    if (error) throw error;

    const contragent: Contragent = {
      id: data.id,
      name: data.name,
      type: data.type as ContragentType,
      logo: data.logo,
      contact: data.contact,
      phone: data.phone,
      email: data.email,
      location: data.location,
      status: data.status as ContragentStatus,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,

      // Type-specific fields
      fleetSize: data.fleetSize,
      rating: data.rating,
      lastDelivery: data.lastDelivery,
      totalOrders: data.totalOrders,
      lastOrder: data.lastOrder,
      accountValue: data.accountValue,
      facilityType: data.facilityType,
      capacity: data.capacity,
      dockDoors: data.dockDoors,
      clientCount: data.clientCount,
      averageRate: data.averageRate,
      paymentTerms: data.paymentTerms,
    };

    return { contragent };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Create a new contragent
 */
export const createContragent = async (
  contragentData: Omit<Contragent, "createdAt" | "updatedAt">,
) => {
  try {
    const { data, error } = {
      data: {
        id: contragentData.id,
        name: contragentData.name,
        type: contragentData.type,
        logo: contragentData.logo,
        contact: contragentData.contact,
        phone: contragentData.phone,
        email: contragentData.email,
        location: contragentData.location,
        status: contragentData.status,

        // Type-specific fields
        fleetSize: contragentData.fleetSize,
        rating: contragentData.rating,
        lastDelivery: contragentData.lastDelivery,
        totalOrders: contragentData.totalOrders,
        lastOrder: contragentData.lastOrder,
        accountValue: contragentData.accountValue,
        facilityType: contragentData.facilityType,
        capacity: contragentData.capacity,
        dockDoors: contragentData.dockDoors,
        clientCount: contragentData.clientCount,
        averageRate: contragentData.averageRate,
        paymentTerms: contragentData.paymentTerms,
        createdAt: '',
        updatedAt: '',
      },
      error: null,
    };

    if (error) throw error;

    return {
      contragent: {
        id: data.id,
        name: data.name,
        type: data.type as ContragentType,
        logo: data.logo,
        contact: data.contact,
        phone: data.phone,
        email: data.email,
        location: data.location,
        status: data.status as ContragentStatus,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,

        // Type-specific fields
        fleetSize: data.fleetSize,
        rating: data.rating,
        lastDelivery: data.lastDelivery,
        totalOrders: data.totalOrders,
        lastOrder: data.lastOrder,
        accountValue: data.accountValue,
        facilityType: data.facilityType,
        capacity: data.capacity,
        dockDoors: data.dockDoors,
        clientCount: data.clientCount,
        averageRate: data.averageRate,
        paymentTerms: data.paymentTerms,
      },
    };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Update a contragent
 */
export const updateContragent = async (
  id: string,
  updates: Partial<Omit<Contragent, "id" | "createdAt" | "updatedAt">>,
) => {
  try {
    const updateData: any = {};
    if (updates.name !== undefined) updateData.name = updates.name;
    if (updates.type !== undefined) updateData.type = updates.type;
    if (updates.logo !== undefined) updateData.logo = updates.logo;
    if (updates.contact !== undefined) updateData.contact = updates.contact;
    if (updates.phone !== undefined) updateData.phone = updates.phone;
    if (updates.email !== undefined) updateData.email = updates.email;
    if (updates.location !== undefined) updateData.location = updates.location;
    if (updates.status !== undefined) updateData.status = updates.status;

    // Type-specific fields
    if (updates.fleetSize !== undefined)
      updateData.fleetSize = updates.fleetSize;
    if (updates.rating !== undefined) updateData.rating = updates.rating;
    if (updates.lastDelivery !== undefined)
      updateData.lastDelivery = updates.lastDelivery;
    if (updates.totalOrders !== undefined)
      updateData.totalOrders = updates.totalOrders;
    if (updates.lastOrder !== undefined)
      updateData.lastOrder = updates.lastOrder;
    if (updates.accountValue !== undefined)
      updateData.accountValue = updates.accountValue;
    if (updates.facilityType !== undefined)
      updateData.facilityType = updates.facilityType;
    if (updates.capacity !== undefined) updateData.capacity = updates.capacity;
    if (updates.dockDoors !== undefined)
      updateData.dockDoors = updates.dockDoors;
    if (updates.clientCount !== undefined)
      updateData.clientCount = updates.clientCount;
    if (updates.averageRate !== undefined)
      updateData.averageRate = updates.averageRate;
    if (updates.paymentTerms !== undefined)
      updateData.paymentTerms = updates.paymentTerms;

    const { data, error } = {data: updateData, error: null};

    if (error) throw error;

    return {
      contragent: {
        id: data.id,
        name: data.name,
        type: data.type as ContragentType,
        logo: data.logo,
        contact: data.contact,
        phone: data.phone,
        email: data.email,
        location: data.location,
        status: data.status as ContragentStatus,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,

        // Type-specific fields
        fleetSize: data.fleetSize,
        rating: data.rating,
        lastDelivery: data.lastDelivery,
        totalOrders: data.totalOrders,
        lastOrder: data.lastOrder,
        accountValue: data.accountValue,
        facilityType: data.facilityType,
        capacity: data.capacity,
        dockDoors: data.dockDoors,
        clientCount: data.clientCount,
        averageRate: data.averageRate,
        paymentTerms: data.paymentTerms,
      },
    };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Delete a contragent
 */
export const deleteContragent = async (id: string) => {
  try {
    const { error } = {error: null};
    if (error) throw error;
    return { success: true };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};
