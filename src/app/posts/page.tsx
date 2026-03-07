import { PostsExplorer } from "@/widgets/postsExplorer/PostsExplorer";

export default function Posts() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <PostsExplorer />
    </div>
  );
}
