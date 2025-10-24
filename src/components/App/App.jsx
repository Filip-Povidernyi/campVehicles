import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import Loader from "../Loader/Loader";


const SharedLayout = lazy(() => import("../SharedLayout/SharedLayout"));
const Home = lazy(() => import("../../pages/Home/Home"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));
const Modal = lazy(() => import("../Modal/Modal"));
const Features = lazy(() => import("../Features/Features"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

const App = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Routes location={state?.background || location}>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="catalog/:id" element={<Modal />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<h2>Сторінку не знайдено 😕</h2>} />
          </Route>
        </Routes>

        {/* Відображення модалки поверх поточного бекґраунду */}
        {state?.background && (
          <Routes>
            <Route path="catalog/:id" element={<Modal />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        )}
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
