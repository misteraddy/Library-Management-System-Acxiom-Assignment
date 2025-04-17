import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function UpdateBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "book",
    isbn: "",
    publisher: "",
    year: "",
  });

  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setBook({
      title: "Sample Book",
      author: "Sample Author",
      category: "book",
      isbn: "123456789",
      publisher: "Sample Publisher",
      year: "2023",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (value) => {
    setBook((prev) => ({
      ...prev,
      category: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !book.title ||
      !book.author ||
      !book.isbn ||
      !book.publisher ||
      !book.year
    ) {
      setIsError(true);
      return;
    }

    setIsError(false);
    console.log("Updated book details:", book);
    navigate("/Home");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-semibold text-center mb-6">Update Book</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="title">Book Title</Label>
          <Input id="title" name="title" value={book.title} onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="author">Author</Label>
          <Input id="author" name="author" value={book.author} onChange={handleChange} />
        </div>

        <div>
          <Label>Category (Book/Movie)</Label>
          <Select value={book.category} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="book">Book</SelectItem>
              <SelectItem value="movie">Movie</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="isbn">ISBN</Label>
          <Input id="isbn" name="isbn" value={book.isbn} onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="publisher">Publisher</Label>
          <Input id="publisher" name="publisher" value={book.publisher} onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="year">Year of Publication</Label>
          <Input id="year" name="year" type="number" value={book.year} onChange={handleChange} />
        </div>

        {isError && (
          <div className="text-red-600 text-sm font-medium">
            Please fill in all the fields before submitting.
          </div>
        )}

        <Button type="submit" className="w-full">
          Update Book
        </Button>
      </form>
    </div>
  );
}

export default UpdateBook;
