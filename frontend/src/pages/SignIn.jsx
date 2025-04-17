import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    navigate("/home", { state: { email, password } });
  }

  return (
    <div className="w-full max-w-md rounded-lg xs:h-80 xs:w-96 bg-white border dark:bg-black dark:border-white">
      <div className="px-6 py-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">Sign In</h2>

        <form onSubmit={handleFormSubmit}>
          <div className="mt-4">
            <Input
              className="w-full mt-2"
              type="text" // ← changed from "email" to "text"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              className="w-full mt-4"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <Link to="#" className="text-sm text-gray-600 dark:text-gray-200 hover:underline">
              Forget Password?
            </Link>

            <Button type="submit" variant="default" className="px-6 py-2 font-medium">
              Sign In
            </Button>
          </div>
        </form>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <button onClick={toggleForm} className="font-medium text-blue-500 dark:text-gray-100 hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
