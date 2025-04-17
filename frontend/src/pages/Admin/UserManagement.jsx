import { Table } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserManagement() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    { id: 2, name: 'Khushi Gupta', email: 'khushi@example.com', role: 'Member' },
    { id: 3, name: 'Aditya Singh', email: 'aditya@example.com', role: 'Admin' },
  ]);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleEdit = (id) => {
    // Navigate to an edit user form page if you create one
    navigate(`/edit-user/${id}`);
  };

  const handleAddUser = () => {
    // Navigate to an add user form page
    navigate('/add-user');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Management - Aditya Singh</h2> {/* Added your name in the header */}
      
      <Button onClick={handleAddUser} className="mb-3">
        Add New User
      </Button>

      <Table className="w-full table-auto">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4">No users available.</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="flex space-x-2">
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default UserManagement;
