import React from "react";
import TruckManagement from "@/components/trucks/TruckManagement";
import ThemeAwareDashboardLayout from "@/components/layout/ThemeAwareDashboardLayout";
import { useAuthContext } from "@/context/AuthContext";

const TrucksPage = () => {
  const { user } = useAuthContext();
  return (
    <ThemeAwareDashboardLayout pageTitle="Truck Management">
      <div className="w-full h-full">
        {/* <h1 className="text-3xl font-bold mb-6">Trucks</h1> */}
        <TruckManagement user={user} />
      </div>
    </ThemeAwareDashboardLayout>
  );
};

export default TrucksPage;
