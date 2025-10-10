import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Catalog from '../../pages/Catalog/Catalog'

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<h2>This path is not exist</h2>} />
      </Routes>
  );
};

export default App
