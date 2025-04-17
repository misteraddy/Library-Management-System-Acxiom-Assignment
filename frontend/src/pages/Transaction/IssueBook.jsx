import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function IssueBook() {
  const [issueData, setIssueData] = useState({
    memberId: '',
    bookId: '',
    issueDate: '',
    dueDate: '',
  });

  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIssueData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { memberId, bookId, issueDate, dueDate } = issueData;

    if (!memberId || !bookId || !issueDate || !dueDate) {
      setIsError(true);
      return;
    }

    setIsError(false);
    console.log('Book Issued:', issueData);
    navigate('/TransactionList');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-2xl shadow-md bg-white">
      <h2 className="text-2xl font-semibold text-center mb-6">Issue Book</h2>
      <form onSubmit={handleSubmit} className="space-y-5">

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="memberId">Member ID</Label>
          <Input
            id="memberId"
            name="memberId"
            value={issueData.memberId}
            onChange={handleChange}
            placeholder="Enter Member ID"
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="bookId">Book ID</Label>
          <Input
            id="bookId"
            name="bookId"
            value={issueData.bookId}
            onChange={handleChange}
            placeholder="Enter Book ID"
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="issueDate">Issue Date</Label>
          <Input
            id="issueDate"
            name="issueDate"
            type="date"
            value={issueData.issueDate}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="dueDate">Due Date</Label>
          <Input
            id="dueDate"
            name="dueDate"
            type="date"
            value={issueData.dueDate}
            onChange={handleChange}
          />
        </div>

        {isError && (
          <div className="bg-red-100 text-red-700 text-sm font-medium p-2 rounded-lg">
            Please fill all the fields before submitting.
          </div>
        )}

        <Button type="submit" className="w-full">
          Issue Book
        </Button>
      </form>
    </div>
  );
}

export default IssueBook;
