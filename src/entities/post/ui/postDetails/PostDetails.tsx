import s from "./PostDetails.module.css";

import { useGetPostByIdQuery } from "../../api/postApi";

type Props = {
  postId: number | null;
  onClose: () => void;
};

export const PostDetailed = ({ postId, onClose }: Props) => {
  const { data: post, isLoading } = useGetPostByIdQuery(postId!, {
    skip: postId === null,
  });

  if (isLoading) {
    return (
      <div className={s.root}>
        <div className={s.modal}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className={s.root}>
        <div className={s.modal}>
          <h3>No post</h3>
          <button className={s.closeBtn} onClick={onClose}>
            X
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <div className={s.modal}>
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
        <button onClick={() => onClose()}>X</button>
      </div>
    </div>
  );
};
