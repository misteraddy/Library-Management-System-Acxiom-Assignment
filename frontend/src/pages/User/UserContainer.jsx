import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const UserContainer = () => {
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate("/report");
  };

  const handleTransactionClick = () => {
    navigate("/transaction");
  };

  return (
    <div className="mt-20 flex flex-col items-center gap-10">
      <div className="text-blue-600 text-2xl text-center">Welcome, User!</div>

      <div className="flex gap-6 flex-wrap justify-center">
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

    </div>
  );
};

export default UserContainer;
