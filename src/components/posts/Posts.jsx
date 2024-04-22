import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from './postsApi.js';
import Post from './Post.jsx';

function Posts() {
  const { isLoading, isError, data: posts, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {posts.map(item => (
        <Post key={item.id} item={item} />
      ))}

    </div>
  );
}

export default Posts;
