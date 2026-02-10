import { PostsExplorer } from "@/widjets/postsExplorer/PostsExplorer";

export default function Posts() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <PostsExplorer />
    </div>
  );
}
