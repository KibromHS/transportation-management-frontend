import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/layout/AuthLayout";
import LoginForm from "./auth/LoginForm";
import { useAuth } from "@/contexts/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (values: {
    email: string;
    password: string;
    rememberMe?: boolean;
  }) => {
    setIsLoading(true);
    
    setError("");

    try {
      console.log("Login attempt with:", values);

      const {email, password} = values;

      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.status == 200) {

        console.log('login response', data);

        const { token, user } = data;

        login(token, user);
        
      } else {
        console.log(response.status, data.message);
        setError(data.message);
      }


    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AuthLayout
      >
        <LoginForm onSubmit={handleLogin} isLoading={isLoading} error={error} />
      </AuthLayout>
    </div>
  );
};

export default Home;
