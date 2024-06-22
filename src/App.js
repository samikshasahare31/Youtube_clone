import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Watch from './components/Watch';
import Feed from './components/Feed';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Feed />
      },
      {
        path: "/watch",
        element: <Watch />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace /> // Redirect to home page for unknown routes
  }
]);

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
