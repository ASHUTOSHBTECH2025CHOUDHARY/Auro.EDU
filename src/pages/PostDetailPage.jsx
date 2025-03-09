import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFeedStore from "../store/FeedStore";

function PostDetailPage() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { posts } = useFeedStore();
  const post = posts.find((p) => p.id === postId);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-detail">
      <button onClick={() => navigate(-1)}>Back</button>
      {post.type === "image" && <img src={post.content} alt={post.title} />}
      {post.type === "video" && <video src={post.content} controls />}
      {post.type === "text" && <p>{post.content}</p>}
      <h2>{post.title}</h2>
    </div>
  );
}

export default PostDetailPage;