import React, { useState } from 'react';

const BookAvailabilityModal = () => {
  const [isOpen, setIsOpen] = useState(true);  // Modal is open by default
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [availability, setAvailability] = useState(''); // Available or Not Available

  // Function to close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Function to check availability (can be replaced with an API call)
  const checkAvailability = () => {
    if (bookName && author) {
      // Assuming the book is available for now (you can replace this with actual logic)
      setAvailability('Available');
    } else {
      setAvailability('Not Available');
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold text-center mb-4">Check Book Availability</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Book Name</label>
              <input 
                type="text" 
                value={bookName} 
                onChange={(e) => setBookName(e.target.value)} 
                placeholder="Enter book name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Author</label>
              <input 
                type="text" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                placeholder="Enter author name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex justify-between">
              <button 
                onClick={checkAvailability}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Check
              </button>
              <button 
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Close
              </button>
            </div>

            {availability && (
              <div className="mt-4 text-center font-semibold text-gray-800">
                <p>{`Book is ${availability}`}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BookAvailabilityModal;
