"use client";

import { PostDetailed } from "@/entities/post/ui/postDetails/PostDetails";
import { PostList } from "@/entities/post/ui/postLIst/PostList";
import { selectSelectedPostId, setSelectedPostId } from "@/features/posts/model/postsSlice";
import { FilterPosts } from "@/features/posts/ui/filterPosts/FilterPosts";
import { Select } from "@/shared/components/Select/Select";
import { useDispatch, useSelector } from "react-redux";
import s from "./PostsExplorer.module.css";

const arr = [
  { label: "first", value: 1 },
  { label: "second", value: 2 },
];

export const PostsExplorer = () => {
  const id = useSelector(selectSelectedPostId);
  
  const showModal = id !== null;
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setSelectedPostId(null));
  };

  return (
    <div className={s.root}>
      <Select options={arr} />
      <FilterPosts />
      <PostList />
      {showModal && <PostDetailed postId={id} onClose={handleClose} />}
    </div>
  );
};
