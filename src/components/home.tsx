import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/layout/AuthLayout";
import LoginForm from "./auth/LoginForm";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (values: {
    email: string;
    password: string;
    rememberMe?: boolean;
  }) => {
    setIsLoading(true);
    setError("");

    try {
      console.log("Login attempt with:", values);

      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const user = data.user;
        const token = data.token;

        localStorage.setItem("userRole", user.role);
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem('auth-token', token);

        navigate("/dashboard");
      }
     
      
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid credentials. Please try again.");
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
