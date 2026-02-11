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
      <h2>{post.title}</h2>
      <p>
        <b>description:</b> {post.body}
      </p>
      <div>
        <span>
          <b>userId:</b> {post.userId}
        </span>
        <span>
          <b>postId:</b> {post.id}
        </span>
      </div>
    </div>
  );
};
