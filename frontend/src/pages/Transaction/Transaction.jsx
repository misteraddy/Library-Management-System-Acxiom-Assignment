import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

function Transaction() {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4 text-center">
      <h2 className="text-2xl font-semibold mb-6">Transaction</h2>
      
      <Button onClick={() => navigate('/CheckBookAvailability')} className="w-full">
        Check Book Availability
      </Button>
      <Button onClick={() => navigate('/IssueBook')} className="w-full">
        Issue Book
      </Button>
      <Button onClick={() => navigate('/ReturnBook')} className="w-full">
        Return Book
      </Button>
    </div>
  );
}

export default Transaction;
