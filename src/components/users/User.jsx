import React, { useState } from 'react';
import { fetchUserById } from './usersApi.js';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

function User({ id }) {
  const [isShow, setIsShow] = useState(false);
  const {
    data: userDetail,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id),
    enabled: isShow, // isShow가 true일 때만 fetchUserById(id) 호출하여 사용자가 요소를 클릭하여 필요할 때만 데이터를 가져올 수 있도록 함
    staleTime: 1000 * 60 * 5, // 5분 이내에는 캐시된 데이터를 사용
    cacheTime: 1000 * 60 * 10, // 10분 동안 캐시된 데이터를 사용
  });


  return (
    <div onClick={() => setIsShow(isShow => !isShow)}>
      <div>userId: {id}</div>
      {isShow && (
        <>
          {isLoading && <div>Loading...</div>}
          {isError && <div>Error: {error?.message}</div>}
          <ul>
            {userDetail ? (
              <>
                <li>userName: {userDetail.username}</li>
                <li>Email: {userDetail.email}</li>
                <li>Phone: {userDetail.phone}</li>
                <li>Website: {userDetail.website}</li>
                <li>street: {userDetail.address?.street}</li>
                <li>{userDetail.address?.suite}</li>
                <li>{userDetail.address?.city}</li>
                <li>{userDetail.address?.zipcode}</li>
                <li>{userDetail.address?.geo?.lat}</li>
                <li>{userDetail.address?.geo?.lng}</li>
              </>
            ) :(
              <div>"No user details available.</div>
            )}
          </ul>
        </>
      )}
    </div>
  );
}

export default User;
