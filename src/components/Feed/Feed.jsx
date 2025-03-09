import React, { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import FeedItem from "./FeedItem";

function Feed({ posts, onPostClick, loading }) {
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: posts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 220, // Approximate height of each post including margin
    overscan: 5, // Render extra items for smoother scrolling
  });

  return (
    <div
      ref={parentRef}
      className="feed-container"
      style={{ overflowY: "auto", padding: "20px",marginBottom:"10px"}}
    >
      <div style={{ height: `${virtualizer.getTotalSize()}px`, position: "relative"}}>
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <FeedItem
            key={virtualRow.key}
            post={posts[virtualRow.index]}
            onClick={() => onPostClick(posts[virtualRow.index]?.id)}
            style={{
              // position: "absolute",
              top: 0,
              background:"pink" ,
              transform: `translateY(${virtualRow.start}px)`,
              height: "200px",// Adjust height for margin
              width: "100%",
              padding:"20px",
              marginBottom: "10px", // Add spacing between posts
            }}
          />
        ))}
      </div>
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
}

export default Feed;