import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Catalog from '../../pages/Catalog/Catalog'
import Favorites from '../../pages/Favorites/Favorites';
import SharedLayout from '../SharedLayout/SharedLayout';
import Modal from '../Modal/Modal';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews'
import CamperDetail from '../../pages/CamperDetail/CamperDetail'

const App = () => {

  const location = useLocation();
  const state = location.state;

  return (<>
    <Routes location={state?.background || location}>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Modal />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<h2>This path is not exist</h2>} />
      </Route>
    </Routes>
    {state?.background && (
        <Routes>
          <Route path="/catalog/:id" element={<Modal />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
    )}
    </>
  );
};

export default App
