import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

function ReturnBook() {
  const [returnData, setReturnData] = useState({
    memberId: '',
    bookId: '',
    returnDate: '',
  });

  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReturnData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!returnData.memberId || !returnData.bookId || !returnData.returnDate) {
      setIsError(true);
      return;
    }

    setIsError(false);
    console.log('Book Returned:', returnData);
    navigate('/TransactionList');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-2xl shadow-md bg-white">
      <h2 className="text-2xl font-semibold text-center mb-6">Return Book</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="memberId">Member ID</Label>
          <Input
            id="memberId"
            name="memberId"
            placeholder="Enter Member ID"
            value={returnData.memberId}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="bookId">Book ID</Label>
          <Input
            id="bookId"
            name="bookId"
            placeholder="Enter Book ID"
            value={returnData.bookId}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="returnDate">Return Date</Label>
          <Input
            id="returnDate"
            name="returnDate"
            type="date"
            value={returnData.returnDate}
            onChange={handleChange}
          />
        </div>

        {isError && (
          <div className="bg-red-100 text-red-700 text-sm font-medium p-2 rounded-lg">
            Please fill in all fields.
          </div>
        )}

        <Button type="submit" className="w-full">
          Return Book
        </Button>
      </form>
    </div>
  );
}

export default ReturnBook;
