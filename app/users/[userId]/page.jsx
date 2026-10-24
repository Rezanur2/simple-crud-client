import React from 'react';

const UserDetailsPage = async ({ params }) => {
    const { userId } = await params;
    
    // capture specific userId from the params object
    const res = await fetch(`http://localhost:5000/users/${userId}`);
    const user = await res.json();

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">User Details: {userId}</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetailsPage;