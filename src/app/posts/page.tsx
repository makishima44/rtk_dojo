import { PostList } from "@/entities/post/ui/postLIst/PostList";

export default function Posts() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Posts List</h1>
      <PostList />
    </div>
  );
}
