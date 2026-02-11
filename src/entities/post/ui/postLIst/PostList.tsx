"use client";
import s from "./PostList.module.css";

import { useGetAllPostsQuery } from "@/entities/post/api/postApi";
import { setSelectedPostId } from "@/features/posts/model/postsSlice";
import { useDispatch } from "react-redux";

export const PostList = () => {
  const { data: posts, isLoading } = useGetAllPostsQuery(undefined);
  const dispatch = useDispatch();

  if (isLoading) {
    return <>...Loading</>;
  }

  if (!posts || posts.length === 0) {
    return <>No posts</>;
  }

  return (
    <>
      <ol>
        {posts.map((post) => {
          return (
            <li onClick={() => dispatch(setSelectedPostId(post.id))} key={post.id} className={s.post}>
              {post.title}
            </li>
          );
        })}
      </ol>
    </>
  );
};
