import React, { useEffect, useRef } from "react";
import Feed from "../components/Feed/Feed";
import SearchBar from "../components/Header/SearchBar";
import useFeedStore from "../store/FeedStore";
import { useNavigate } from "react-router-dom";

function FeedPage() {
  const {
    posts,
    fetchPosts,
    loading,
    page,
    setPage,
    scrollPosition,
    setScrollPosition,
    searchPosts,
  } = useFeedStore();
  const containerRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts(page);
  }, [page, fetchPosts]);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  const handlePostClick = (postId) => {
    setScrollPosition(window.scrollY);
    navigate(`/post/${postId}`);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !loading
    ) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div ref={containerRef} className="feed-page">
      <SearchBar onSearch={searchPosts} />
      <Feed posts={posts} onPostClick={handlePostClick} loading={loading} />
    </div>
  );
}

export default FeedPage;