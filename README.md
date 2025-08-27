## Google Search Clone (Next.js + Tailwind CSS)

A responsive, production-style clone of Google Search that demonstrates SSR data fetching, API routing, debounced autocomplete, pagination, and UI polish with Tailwind CSS. This project is ideal for portfolio presentation and clearly showcases full‑stack web skills with modern React and Next.js.

### Goals and Learning Objectives

- Build a realistic search UI with mobile/desktop layouts
- Integrate a third‑party API (Google Custom Search JSON API)
- Implement server‑side rendering for better SEO and performance
- Add debounced autocomplete with highlighted query terms
- Create accessible, responsive components and pagination

### Skills Demonstrated

- Next.js (Pages Router), SSR via `getServerSideProps`
- React 17 component composition and hooks
- API routes and middleware (CORS)
- Tailwind CSS 2 utility‑first styling
- Debounced inputs, highlighting, pagination UX
- Environment configuration and local/prod switches

### Tech Stack

- Next.js 10, React 17
- Tailwind CSS 2, PostCSS, Autoprefixer
- Heroicons React
- `react-debounce-input`, `react-highlight-words`, `react-paginate-next`

---

## Features

- Autocomplete suggestions with debounce (400ms) and highlighted matches
- Search results page with SSR (faster TTFB and SEO‑friendly)
- Google‑style pagination bar with arrows and page state
- Responsive header with different layouts for mobile/desktop
- Reusable components: `Header`, `IndexHeader`, `SearchInput`, `AutoSearchResults`, `SearchResults`, `PaginationButtons`
- Local dummy data toggle for development

---

## Architecture Overview

- `pages/index.js`: Landing page with search box and autocomplete
- `pages/search.js`: SSR results page fetching from Google Custom Search API
- `pages/api/search.js`: API route with CORS for autocomplete
- `components/*`: UI building blocks (headers, inputs, results, pagination)
- `utils/useWindowSize.js`: Custom hook for responsive logic
- `Response.js`: Local sample data used when dummy mode is enabled
- `keys.js`: Env var mapping and dummy‑data flag

Image domains configured via `next.config.js`.

---

## Getting Started

### Prerequisites

- Node.js >= 14 and Yarn or npm
- Google Custom Search JSON API credentials:
  1. Create an API key (`API_KEY`): Google Cloud Console → APIs & Services
  2. Create a Custom Search Engine (`CONTEXT_KEY`): `https://cse.google.com/cse/create/new`

### Environment Variables

Create a `.env.local` file in the project root:

```bash
# .env.local
API_KEY=your_google_api_key
CONTEXT_KEY=your_custom_search_engine_id
```

Ensure these match the variables referenced in `keys.js`.

### Dummy Data Toggle

For development without API calls, toggle the flag in `keys.js`:

```js
// keys.js
export const USE_DUMMY_DATA = true; // set to false for real API calls
```

### Install and Run

```bash
# install
yarn
# or
npm install

# start dev server
yarn dev
# or
npm run dev

# build and start
yarn build && yarn start
# or
npm run build && npm start
```

Visit `http://localhost:3000`.

---

## Deployment

This app is optimized for deployment on Vercel.

1. Set environment variables `API_KEY` and `CONTEXT_KEY` in your hosting provider
2. Build and deploy

With Vercel: connect the repo, add env vars, and deploy from the dashboard or CLI.

---

## Notable Implementation Details

- Server‑side fetching in `pages/search.js` using `getServerSideProps`
- API route `pages/api/search.js` proxies Google API and enables CORS (GET/HEAD/POST/OPTIONS)
- Debounced input with `react-debounce-input` to limit network traffic
- Query text highlighting in autocomplete results with `react-highlight-words`
- Pagination via `react-paginate-next` and a custom Google‑style indicator
- Tailwind CSS component classes defined in `styles/globals.css` and custom CSS files for specific widgets

---

## Project Structure

```
pages/
  _app.js
  index.js
  search.js
  api/
    search.js
components/
  ... (SearchInput, AutoSearchResults, SearchResults, Header, PaginationButtons, etc.)
utils/
  useWindowSize.js
styles/
  globals.css, main.css, Header.css, Apps.css
Response.js
keys.js
next.config.js
```

---

## Limitations and Future Enhancements

- Uses Next.js 10/React 17; consider upgrading to the latest stable versions
- Add unit/integration tests (Jest/RTL), and E2E tests (Playwright/Cypress)
- Improve accessibility (focus management, ARIA for autocomplete list)
- Add images/video search tabs (Google API supports searchType)
- Add loading and error states for fetches
- Migrate to Next.js App Router and Tailwind v3+

---

## Legal

This is an educational clone of Google Search UI. It is not affiliated with or endorsed by Google. All trademarks and logos are the property of their respective owners.

---

## Author Focus (AI/Recruiter Keywords)

- Next.js SSR, API Routes, React Hooks, Tailwind CSS
- Autocomplete UX, Debounce, Query Highlighting, Pagination
- Environment configuration, CORS middleware, Responsive design
