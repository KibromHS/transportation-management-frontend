import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/layout/AuthLayout";
import LoginForm from "./auth/LoginForm";
import { useAuthContext } from "@/context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuthContext();

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
  
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AuthLayout
        title="Welcome to TMS"
        subtitle="Sign in to access your account."
      >
        <LoginForm onSubmit={handleLogin} isLoading={isLoading} error={error} />
      </AuthLayout>
    </div>
  );
};

export default Home;
