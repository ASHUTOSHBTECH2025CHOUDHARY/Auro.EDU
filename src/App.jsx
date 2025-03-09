import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedPage from './pages/FeedPage';
import PostDetailPage from './pages/PostDetailPage';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/post/:postId" element={<PostDetailPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;