import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const basenameRaw = import.meta.env.BASE_URL.replace(/\/$/, "");

export const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "services", element: <Services /> },
        { path: "products", element: <Products /> },
        { path: "gallery", element: <Gallery /> },
        { path: "contact", element: <Contact /> },
        { path: "About", element: <Navigate to="/about" replace /> },
        { path: "Services", element: <Navigate to="/services" replace /> },
        { path: "Products", element: <Navigate to="/products" replace /> },
        { path: "Gallery", element: <Navigate to="/gallery" replace /> },
        { path: "Contact", element: <Navigate to="/contact" replace /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  basenameRaw ? { basename: basenameRaw } : undefined
);
