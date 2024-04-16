import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { selectedUserIdState } from '../../recoilState/recoilAtom.js';

function User({ item: { id, username, email, phone, address } }) {
  const navigate = useNavigate();
  const setSelectedUserId = useSetRecoilState(selectedUserIdState);

  const handleUserClick = () => {
    setSelectedUserId(id);
    navigate('/userinfo');
  };

  return (
    <ul onClick={handleUserClick}>
      <li>{id}</li>
      <li>{username}</li>
      <li>{email}</li>
      <li>{phone}</li>
      {/*<li>{address?.zipcode}</li>*/}
      {/*<li>{address?.city}</li>*/}
    </ul>
  );
}

export default User;
