import { Routes, Route } from "react-router-dom";

import { Home, Profile, NewMovie, MoviePreview } from "../pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new-movie" element={<NewMovie />} />
      <Route path="/movie-preview/:note_id" element={<MoviePreview />} />
    </Routes>
  );
}
