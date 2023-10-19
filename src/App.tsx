import { Route, Routes } from "react-router-dom";
import Portfolio from "./views/portfolio";
import Page404 from "./views/404";
import NavLayout from "./layouts/nav_layout";
import ShowcaseLayout from "./views/portfolio_id";
import Home2 from "./views/home";
import { CssBaseline } from "@mui/material";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Blog from "./views/blog";

firebase.initializeApp({
  apiKey: import.meta.env.VITE_VERCEL_MY_FIREBASE_APIKEY,
  authDomain: "stevenbennettdevblog.firebaseapp.com",
  projectId: "stevenbennettdevblog",
  storageBucket: "stevenbennettdevblog.appspot.com",
  messagingSenderId: "832355006421",
  appId: "1:832355006421:web:5dee3dadd596436b6aef5c",
  measurementId: import.meta.env.VITE_VERCEL_MY_FIREBASE_MESSAGINGSENDERID,
});

export const firestore = firebase.firestore();

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/portfolio/*" element={<ShowcaseLayout />} />

        <Route
          path="*"
          element={
            <NavLayout>
              <Page404 />
            </NavLayout>
          }
        />
        <Route
          path="/"
          element={
            <NavLayout>
              <Home2 />
            </NavLayout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <NavLayout>
              <Portfolio />
            </NavLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <NavLayout>
              <Blog />
            </NavLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
