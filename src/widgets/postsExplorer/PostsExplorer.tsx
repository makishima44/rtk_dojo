"use client";

import { PostDetailed } from "@/entities/post/ui/postDetails/PostDetails";
import { PostList } from "@/entities/post/ui/postLIst/PostList";
import { FilterPosts } from "@/features/posts/ui/filterPosts/FilterPosts";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import s from "./PostsExplorer.module.css";
import { setSelectedPostId } from "@/features/posts/model/postsSlice";

export const PostsExplorer = () => {
  const id = useSelector((state: RootState) => state.posts.selectedPostId);
  const showModal = id !== null;
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setSelectedPostId(null));
  };

  return (
    <div className={s.root}>
      <FilterPosts />
      <PostList />
      {showModal && <PostDetailed postId={id} onClose={handleClose}/>}
    </div>
  );
};
