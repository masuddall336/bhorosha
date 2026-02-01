
import { log } from 'firebase/firestore/lite/pipelines';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
  const initialUsers = useLoaderData();
  console.log(initialUsers);

  const [user, setUser] = useState(initialUsers);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`,{
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log('delet data', data);
            
            if (data.deletedCount) {
              
              Swal.fire({

                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remainingUser = user.filter(clickUser => clickUser._id !== id);
              setUser(remainingUser);
            }
          })
      }
    });
  }

  return (
    <div className="space-y-3">
      {user.map((user, index) => (
        <div
          key={user._id}
          className="flex items-center justify-between bg-white border rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition"
        >
          {/* Left side */}
          <div className="flex items-center gap-4">
            {/* SL */}
            <span className="text-sm text-gray-500 w-6">
              {index + 1}
            </span>

            {/* Profile Picture */}
            <img
              src={user.profile_picture}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover border"
            />

            {/* User Info */}
            <div>
              <p className="font-semibold text-gray-800">
                {user.name}
              </p>
              <p className="text-sm text-gray-500">
                {user.email}
              </p>
              <p className="text-xs text-gray-400">
                Created: {user.creationTime}
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex gap-2">
            {/* <button
              className="px-4 py-1.5 text-sm rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50"
              onClick={() => handleEdit(user._id)}
            >
              Edit
            </button> */}

            <button
              className="px-4 py-1.5 text-sm rounded-lg border border-red-500 text-red-600 hover:bg-red-50"
              onClick={() => handleDelete(user._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Users;