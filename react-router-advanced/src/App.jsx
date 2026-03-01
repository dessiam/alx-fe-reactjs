import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<h1>Home</h1>} />

        {/* Protected Profile Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >

          {/* Nested Routes */}

          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />

        </Route>

        {/* Dynamic Route */}

        <Route path="/post/:id" element={<BlogPost />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;