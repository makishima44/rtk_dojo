"use client";

import { useGetAllPostsQuery } from "@/entities/post/api/postApi";

export const PostList = () => {
  const { data: posts } = useGetAllPostsQuery(undefined);

  if (!posts) {
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
