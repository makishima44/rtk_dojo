"use client";
import s from "./PostList.module.css";

import { useGetAllPostsQuery } from "@/entities/post/api/postApi";
import { setSelectedPostId } from "@/features/posts/model/postsSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const PostList = () => {
  const { data: posts, isLoading } = useGetAllPostsQuery(undefined);
  const selectedId = useSelector((state: RootState) => state.users.selectedUserId);
  const dispatch = useDispatch();

  if (isLoading) {
    return <>...Loading</>;
  }

  if (!posts || posts.length === 0) {
    return <>No posts</>;
  }

  const filteredPost = selectedId === null ? posts : posts.filter((post) => post.userId === selectedId);

  return (
    <>
      <ol>
        {filteredPost.map((post) => {
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
