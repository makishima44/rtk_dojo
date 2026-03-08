"use client";

import { PostDetailed } from "@/entities/post/ui/postDetails/PostDetails";
import { PostList } from "@/entities/post/ui/postLIst/PostList";
import s from "./PostsExplorer.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { FilterPosts } from "@/features/posts/ui/filterPosts/FilterPosts";

export const PostsExplorer = () => {
  const id = useSelector((state: RootState) => state.posts.selectedPostId);

  return (
    <div className={s.root}>
      <FilterPosts />
      <PostList />
      <PostDetailed postId={id} />
    </div>
  );
};
