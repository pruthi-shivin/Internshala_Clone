Internship Search Page Clone

A React.js internship search platform inspired by the Internshala internships page. The application allows users to browse internships, apply frontend filters, paginate results, and switch between light and dark mode.

Features:

- Internship listings fetched using API
- Frontend-only filtering
- Filter by:
    Internship Profile
    Location
    Work From Home
    Part-Time
    Minimum Stipend
- Real Pagination
- Dark Mode
- Responsive Design
- Testimonials Section
- FAQ Accordion
- Internship Tags & Badges
- Clean and Modular React Components

Tech Stack:

-React.js
-Vite
-Axios
-CSS3

API Used:

https://internshala.com/hiring/search

Project Structure:

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