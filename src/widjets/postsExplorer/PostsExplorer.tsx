"use client";

import { PostDetailed } from "@/entities/post/ui/postDetails/PostDetails";
import { PostList } from "@/entities/post/ui/postLIst/PostList";
import s from "./PostsExplorer.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const PostsExplorer = () => {
  const id = useSelector((state: RootState) => state.posts.selectedPostId);

  return (
    <div className={s.root}>
      <PostList />
      <PostDetailed postId={id} />
    </div>
  );
};
