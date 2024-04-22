import React from 'react';
import { fetchUsers } from './usersApi.js';
import { useQuery } from '@tanstack/react-query';
import User from './User.jsx';


function Users() {
  const { data: users, isLoading, isError } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });
  // console.log({ users, isLoading, isError });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
     <div>
       <h2>users</h2>
       <ul>
          {users.map(user => (
            <User key={user.id} id={user.id} />
          ))}
       </ul>
     </div>
  );
}

export default Users;