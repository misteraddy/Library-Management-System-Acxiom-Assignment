import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const AdminContainer = () => {
  const navigate = useNavigate();

  const handleMaintenanceClick = () => {
    navigate("/maintaince");
  };

  const handleReportClick = () => {
    navigate("/report");
  };

  const handleTransactionClick = () => {
    navigate("/transaction");
  };

  return (
    <div className="mt-20 flex flex-col items-center gap-10">
      <div className="text-green-600 text-2xl text-center">Welcome, Admin!</div>

      <div className="flex gap-6 flex-wrap justify-center">
        <Button
          variant="default"
          className="w-52 h-20 text-lg font-semibold rounded-xl shadow-md"
          onClick={handleMaintenanceClick}
        >
          Maintenance Menu
        </Button>
        <Button
          variant="default"
          className="w-52 h-20 text-lg font-semibold rounded-xl shadow-md"
          onClick={handleReportClick}
        >
          Report Menu
        </Button>
        <Button
          variant="default"
          className="w-52 h-20 text-lg font-semibold rounded-xl shadow-md"
          onClick={handleTransactionClick}
        >
          Transaction Menu
        </Button>
      </div>

      {/* Product Details Table */}
      <div className="w-full max-w-4xl px-4">
        <ProductDetails />
      </div>
    </div>
  );
};

export default AdminContainer;
