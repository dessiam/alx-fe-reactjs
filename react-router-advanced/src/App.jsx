import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<h1>Home</h1>} />

        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/blog/:id" element={<BlogPost />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;