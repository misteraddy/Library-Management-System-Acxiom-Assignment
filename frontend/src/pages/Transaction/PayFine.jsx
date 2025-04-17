import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

function PayFine() {
  const [fineData, setFineData] = useState({
    memberId: '',
    amount: '',
  });

  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFineData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fineData.memberId || !fineData.amount) {
      setIsError(true);
      return;
    }

    setIsError(false);
    console.log('Fine Paid:', fineData);
    navigate('/TransactionList');
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Pay Fine</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="memberId">Member ID</Label>
          <Input
            type="text"
            id="memberId"
            name="memberId"
            placeholder="Enter Member ID"
            value={fineData.memberId}
            onChange={handleChange}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="amount">Fine Amount</Label>
          <Input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter Fine Amount"
            value={fineData.amount}
            onChange={handleChange}
          />
        </div>

        {isError && (
          <div className="bg-red-100 text-red-700 text-sm font-medium p-2 rounded-lg">
            Please fill in all fields.
          </div>
        )}

        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
          Pay Fine
        </Button>
      </form>
    </div>
  );
}

export default PayFine;
