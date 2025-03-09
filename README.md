# Virtualized Feed React App

This project is a React application that implements a virtualized feed using the TanStack library. It leverages a free online API to fetch data dynamically with lazy loading and implements debouncing for optimized performance.

## Features

- **Virtualized Feed**: Efficiently renders a large list of items using TanStack Virtual
- **Lazy Loading**: Fetches data only when needed, reducing unnecessary API calls
- **Debouncing**: Implements a delay mechanism to prevent excessive API requests during user interactions
- **Free API Integration**: Uses a publicly available API to retrieve data in real-time

## Tech Stack

- React
- TanStack Virtual
- Axios (for API requests)
- React Query (for caching and asynchronous data fetching)
- Lodash (for debouncing functionality)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/virtualized-feed-react.git
   ```
2. Navigate to the project directory:
   ```bash
   cd virtualized-feed-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Start the development server:
```bash
npm start
```

Open your browser and go to [http://localhost:3000/](http://localhost:5173/) to view the app.


## How It Works

- **Virtualization**: Uses `tanstack/react-virtual` to render only the visible items in the feed, improving performance.
- **Lazy Loading**: Loads more data as the user scrolls down, reducing the initial load time.
- **Debouncing**: Implements `lodash.debounce` to delay API requests and prevent excessive calls when scrolling or filtering.

## Dependencies

- `react`
- `tanstack/react-virtual`
- `axios`
- `react-query`
- `lodash`


## Author

Your Name - [Ashutosh Choudhary](https://github.com/ASHUTOSHBTECH2025CHOUDHARY)
