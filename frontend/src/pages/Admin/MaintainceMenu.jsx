import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function MaintainceMenu() {
  const navigate = useNavigate();

  return (
    <div className="mt-20 flex flex-col items-center gap-10">
      <div className="text-blue-600 text-2xl text-center">
        Maintenance Menu
      </div>

      <div className="flex gap-6 flex-wrap justify-center">
        <Button
          variant="default"
          className="w-60 h-20 text-lg font-semibold rounded-xl shadow-md"
          onClick={() => navigate("/memberships")}
        >
          Add/Update Memberships
        </Button>
        <Button
          variant="default"
          className="w-60 h-20 text-lg font-semibold rounded-xl shadow-md"
          onClick={() => navigate("/books")}
        >
          Add/Update Books
        </Button>
        <Button
          variant="default"
          className="w-60 h-20 text-lg font-semibold rounded-xl shadow-md"
          onClick={() => navigate("/users")}
        >
          Users Management
        </Button>
      </div>
    </div>
  );
}

export default MaintainceMenu;
