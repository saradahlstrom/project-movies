import { Route } from "react-router-dom";
import { Movies } from "../pages/Movies/Movies";
import { MovieDetails } from "../pages/MovieDetails/MovieDetails";

const routes = (
  <>
    <Route path="/" element={<Movies />} />
    <Route path="/movie/:id" element={<MovieDetails />} />
  </>
);

export default routes;