import s from "./PostDetails.module.css";

import { useGetPostByIdQuery } from "../../api/postApi";

type Props = {
  postId: number | null;
};

export const PostDetailed = ({ postId }: Props) => {
  const { data: post, isLoading } = useGetPostByIdQuery(postId!, {
    skip: postId === null,
  });

  if (isLoading) {
    return <>...Loading</>;
  }

  if (!post) {
    return <>No Post</>;
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
