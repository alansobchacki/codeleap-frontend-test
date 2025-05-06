# CodeLeap Front End Coding Test

This is a coding test front end project built with **React + Vite**.

🔗 Live Demo: https://codeleap-frontend-test-drab.vercel.app/

![chrome_cIEKe6DbmA](https://github.com/user-attachments/assets/b018ecab-afb6-41c6-b635-7c6cd584b1ea)

## Getting Started

### 1. Clone the Repository

```
git clone https://github.com/your-username/codeleap-frontend-test.git
cd codeleap-frontend-test
```

### 2. Install Dependencies
Make sure you have Node.js installed (preferably v16+), then run:

```
npm install
```

### 3. Set Up Environment Variables
Create a .env file in the root directory of the project and add the following line:

```
VITE_API_URL=https://dev.codeleap.co.uk/careers/
```

⚠️ This is required for the app to fetch data from the API.

### 4. Run the App
Start the development server with:

```
npm run dev
```

Then visit http://localhost:5173 in your browser.

## Notes

This project was built with minimal library usage — only MUI and React Query (TanStack) were included — to maintain a focus on core React and JavaScript fundamentals.

I typically work with TypeScript in production projects, but since it wasn't listed as a requirement (at least I didn't see it), this solution uses plain JavaScript and CSS modules. 

I'd also normally use some quality-of-life libraries like Axios, Formik, and Jotai, but I felt raw JavaScript / React was the best call here.
