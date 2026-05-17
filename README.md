# Internship Search Platform

A modern Internship Search Platform inspired by the Internshala internships page, built using React.js and Vite. The application allows users to browse internship opportunities, apply frontend filters, paginate results, and switch between light and dark themes.

---

## Live Demo

https://your-vercel-link.vercel.app

---

## Features

### Internship Listings
- Fetches internship data dynamically using API
- Displays internship cards with details and tags

### Frontend Filtering
Users can filter internships by:
- Internship Profile
- Location
- Work From Home
- Part-Time
- Minimum Stipend

### Pagination
- Dynamic pagination
- Previous / Next navigation
- 10 internships per page

### Dark Mode
- Toggle between light and dark themes
- Modern UI experience

### Responsive Design
- Mobile responsive
- Tablet responsive
- Desktop optimized

### Additional Sections
- Testimonials Section
- FAQ Accordion
- Internship Tags & Badges

---

## Tech Stack

### Frontend
- React.js
- Vite
- CSS3

### API
- Axios
- Internshala Hiring API

---

## API Used

https://internshala.com/hiring/search

---

## Folder Structure

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Filters.jsx
│   ├── InternshipCard.jsx
│   ├── Pagination.jsx
│   ├── FAQ.jsx
│   └── Testimonials.jsx
│
├── pages/
│   └── Home.jsx
│
├── styles/
│   ├── global.css
│   ├── navbar.css
│   ├── filters.css
│   ├── card.css
│   ├── pagination.css
│   ├── faq.css
│   ├── testimonial.css
│   └── home.css
│
├── App.jsx
└── main.jsx
```

Installation & Setup:

Clone Repository:

- git clone YOUR_GITHUB_REPO_LINK

Navigate to Project

- cd internshala

Install Dependencies:

- npm install

Run Development Server:

- npm run dev


Pagination Logic:

- 5 internships displayed per page
- Dynamic page numbers
- Previous / Next navigation
- Frontend pagination using array slicing
- Filtering Logic

Filtering is implemented completely on the frontend using JavaScript array methods.

The application filters internships dynamically based on:

- Title
- Location
- Work From Home availability
- Part-Time availability
- Minimum stipend value
- Dark Mode

Dark mode is implemented using:

- React state management
- Conditional body classes
- Dynamic CSS styling
- Responsive Design

The UI is responsive across:

-Desktop
-Tablet
-Mobile devices

Implemented using:

- CSS Flexbox
- CSS Grid
- Media Queries

Future Improvements:

- Debounced Search
- Skeleton Loaders
- Sorting Options
- Saved Internships
- Mobile Sidebar Drawer
- Authentication
- Backend Filtering
