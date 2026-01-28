import { PostList } from "@/entities/post/ui/PostList";
import styles from "../page.module.css";

export default function Posts() {
  return (
    <div className={styles.page}>
      <PostList />
    </div>
  );
}
