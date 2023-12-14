import { Route, Routes } from "react-router-dom";
import Portfolio from "./views/portfolio/portfolio";
import Page404 from "./views/404";
import NavLayout from "./layouts/nav_layout";
import ShowcaseLayout from "./views/portfolio/portfolio_id/portfolio_id";
import Home from "./views/home/home";
import { CssBaseline } from "@mui/material";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import BlogFeed from "./views/blog/blogs";
import BlogByID from "./views/blog/blogs_id";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Provider store={store}>
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
                <Home />
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
            path="/blogs"
            element={
              <NavLayout>
                <BlogFeed />
              </NavLayout>
            }
          />
          <Route
            path="/blogs/:blogID"
            element={
              <NavLayout>
                <BlogByID />
              </NavLayout>
            }
          />
        </Routes>
      </Provider>
    </LocalizationProvider>
  );
}

export default App;
