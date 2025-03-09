import { create } from "zustand";

const useFeedStore = create((set, get) => ({
  posts: [],
  page: 1,
  loading: false,
  scrollPosition: 0,

  fetchPosts: async (page) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=49227193-0bdded9a7a86bb90bbb91aed1&page=${page}&per_page=20`
      );
      const data = await response.json();
      const newPosts = data.hits.map((item) => ({
        id: item.id.toString(),
        type: item.type === "photo" ? "image" : "video",
        title: item.tags || `Post ${page}-${item.id}`,
        content: item.type === "photo" ? item.webformatURL : item.videos?.medium.url,
      }));
      set((state) => ({
        posts: page === 1 ? newPosts : [...state.posts, ...newPosts],
        loading: false,
        page,
      }));
    } catch (error) {
      set({ loading: false });
    }
  },

  searchPosts: async (term) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=YOUR_PIXABAY_API_KEY&q=${encodeURIComponent(term)}&page=1&per_page=20`
      );
      const data = await response.json();
      const results = data.hits.map((item) => ({
        id: item.id.toString(),
        type: item.type === "photo" ? "image" : "video",
        title: item.tags || `Search Result for ${term}`,
        content: item.type === "photo" ? item.webformatURL : item.videos?.medium.url,
      }));
      set({ posts: results, loading: false, page: 1 });
    } catch (error) {
      set({ loading: false });
    }
  },

  setPage: (page) => set({ page }),
  setScrollPosition: (position) => set({ scrollPosition: position }),
}));

export default useFeedStore;