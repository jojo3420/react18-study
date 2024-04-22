import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPostById } from './postsApi.js';
import User from '../users/User.jsx';

function Post({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShowUserInfo, setIsShowUserInfo] = useState(false);
  const { isLoading, isError, data: postDetail, error } = useQuery({
    queryKey: ['post', item.id],
    queryFn: () => fetchPostById(item.id),
    enabled: !!isExpanded,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
  

  return (
    <div>
      <div>title: {item.title}</div>
      <button onClick={() => setIsExpanded(prev => !prev)}>더보기</button>
      {isExpanded && postDetail && (
        <>
          {isLoading && <div>Loading...</div>}
          {isError ? (
            <div>Error: {error?.message}</div>
          ) : (
            <div>
              <div>id: {item.id}</div>
              <div>body: {postDetail?.body}</div>
              <User id={item.userId} />
            </div>
          )}
        </>
      )}
      <hr />
    </div>
  );
}

export default Post;