import { PostList } from "@/component/PostList";
import styles from "../page.module.css";

export default function Posts() {
  return (
    <div className={styles.page}>
      <PostList />
    </div>
  );
}
