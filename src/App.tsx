import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import AllVenues from './pages/all-venues/AllVenues';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/all-venues" element={<AllVenues />} />
      </Route>
    </Routes>
  );
};

export default App;
