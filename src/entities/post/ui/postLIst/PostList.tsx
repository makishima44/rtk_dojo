"use client";

import { useGetAllPostsQuery } from "@/entities/post/api/postApi";

export const PostList = () => {
  const { data: posts, isLoading } = useGetAllPostsQuery(undefined);

  if (isLoading) {
    return <>...Loading</>;
  }

  if (!posts || posts.length === 0) {
    return <>No posts</>;
  }

  return (
    <>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </>
  );
};
