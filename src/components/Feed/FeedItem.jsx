import React, { useRef, useState, useEffect } from 'react';

function FeedItem({ post, onClick, style }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="feed-item"
      style={{ ...style, boxSizing: "border-box" }} // Add padding and ensure it's included in the height
      onClick={onClick}
    >
      {isVisible && (
        <>
          <h3>{post.title}</h3>
          {post.type === 'image' && <img src={post.content}  style={{
          display: "block",
          maxWidth: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          margin: "0 auto",
          boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)"
        }} alt={post.title} loading="lazy" />}
          {post.type === 'video' && <video src={post.content}  style={{
          display: "block",
          maxWidth: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          margin: "0 auto",
          boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)"
        }}controls muted />}
          {post.type === 'text' && <p>{post.content}</p>}
        </>
      )}
    </div>
  );
}

export default FeedItem;