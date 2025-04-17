import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

function AddBook() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    year: '',
    type: 'book',
    description: '',
  });

  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value) => {
    setBook((prev) => ({
      ...prev,
      type: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!book.title || !book.author || !book.genre || !book.year) {
      setIsError(true);
      return;
    }

    setIsError(false);
    console.log('New Book Added:', book);
    navigate('/home');
  };

  return (
    <Card className="max-w-xl mx-auto mt-10 p-6 shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-center">Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" value={book.title} onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="author">Author</Label>
          <Input id="author" name="author" value={book.author} onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="genre">Genre</Label>
          <Input id="genre" name="genre" value={book.genre} onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="year">Year of Publication</Label>
          <Input id="year" name="year" type="number" value={book.year} onChange={handleChange} />
        </div>

        <div>
          <Label>Type</Label>
          <RadioGroup value={book.type} onValueChange={handleRadioChange} className="flex gap-4 mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="book" id="bookType" />
              <Label htmlFor="bookType">Book</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="movie" id="movieType" />
              <Label htmlFor="movieType">Movie</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" value={book.description} onChange={handleChange} rows={3} />
        </div>

        {isError && (
          <p className="text-red-500 text-sm font-medium">
            Please fill in all required fields before submitting.
          </p>
        )}

        <Button type="submit" className="w-full">Add Book</Button>
      </form>
    </Card>
  );
}

export default AddBook;
