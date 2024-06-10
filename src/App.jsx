import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

import MainLayout from "./layout/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
