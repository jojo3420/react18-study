import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedUserIdState } from '../../recoilState/recoilAtom.js';
import { getUserDetailById } from '../../recoilState/recoilSelectors.js';
import { useNavigate } from 'react-router-dom';

function UserInfo() {
  const navigate = useNavigate();
  const userId = useRecoilValue(selectedUserIdState);
  const userDetail = useRecoilValue(getUserDetailById(userId));
  return (
    <div>
      <h2>userInfo</h2>
      <ul>
        <li>{userDetail.id}</li>
        <li>{userDetail.username}</li>
        <li>{userDetail.address.zipcode}</li>
        <li>{userDetail.address.city}</li>
      </ul>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}

// export default UserInfo;


// Suspense를 사용하여 UserInfo 컴포넌트를 감싸고 있습니다. 만약 getUserDetailById 셀렉터가 Promise를 throw 한다면, Suspense는 fallback 컴포넌트를 렌더링할 것입니다. 그렇지 않고 데이터가 준비되면, UserInfo 컴포넌트가 렌더링될 것입니다.
export default function UserInfoSuspenseWrapper() {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <UserInfo />
    </React.Suspense>
  );
}
