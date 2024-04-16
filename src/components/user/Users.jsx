import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import User from './User.jsx';
import { getUsers } from '../../recoilState/recoilSelectors.js';

function Users() {
  const users = useRecoilValue(getUsers);

  return (
    <div>
      <h2>Users</h2>
      <div>
        {users.length === 0 ? (
          <div>loading...</div>
        ) : (
          users.map(user => <User key={user.id} item={user} />)
        )}
      </div>
    </div>
  );
}

export default Users;
