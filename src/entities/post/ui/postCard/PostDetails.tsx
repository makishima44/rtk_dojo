import s from "./PostDetails.module.css";

import { useGetPostByIdQuery } from "../../api/postApi";

export const PostDetailed = () => {
  const { data: post, isLoading } = useGetPostByIdQuery(12);

  if (post === undefined) {
    return <>No Post</>;
  }

  if (isLoading) {
    return <>...Loading</>;
  }

  return (
    <div className={s.root}>
      <h3>title: {post.title}</h3>
      <p>description: {post.body}</p>
      <div>
        <span>userId: {post.userId}</span>
        <span>postId: {post.id}</span>
      </div>
    </div>
  );
};
