# NewsMonkey React App

NewsMonkey is a React-based news reader app that displays top headlines across multiple categories using the NewsAPI. It includes routing for category navigation, a responsive navbar, loading state handling, and article cards with links to full stories.

## Features

- React app created with Create React App
- Category-based news browsing:
  - General
  - Business
  - Entertainment
  - Health
  - Science
  - Sports
  - Technology
- Client-side routing with `react-router-dom`
- Fetches live headlines from the NewsAPI
- Loading spinner while data is being fetched
- Article cards with title, description, author, date, and external article link

## Project Structure

- `src/App.js` - main application routes and API key setup
- `src/Components/NavBar.js` - navbar with category links
- `src/Components/News.js` - data fetching and article listing
- `src/Components/NewsItems.js` - individual article card layout
- `src/Components/Spinner.js` - loading indicator
- `public/` - static public assets
- `build/` - production build output

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm or yarn

### Installation

1. Clone or download the repository
2. Install dependencies:

```bash
npm install
```

### Environment Setup

This app expects a News API key provided through an environment variable.

Create a `.env` file in the project root with the following content:

```env
REACT_APP_NEWS_API=your_newsapi_key_here
```

If you do not have a NewsAPI key, sign up at [https://newsapi.org](https://newsapi.org) and generate one.

### Run Locally

```bash
npm start
```

Then open `http://localhost:3000` in your browser.

### Build for Production

```bash
npm run build
```

## Notes

- The app uses `process.env.REACT_APP_NEWS_API` to access the API key.
- The default country code is `us` for top headlines.
- The document title updates dynamically based on the selected news category.

## Dependencies

- `react`
- `react-dom`
- `react-router-dom`
- `react-scripts`
- `web-vitals`
- `@testing-library/react`
- `@testing-library/jest-dom`
- `@testing-library/dom`
- `@testing-library/user-event`

## License

This project is provided as-is with no specific license.
