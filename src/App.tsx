import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import AllVenues from './pages/all-venues/AllVenues';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import AddVenue from './pages/add-venue/AddVenue';
import MyVenues from './pages/my-venues/MyVenues';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import SingleVenue from './pages/single-venue/SingleVenue';
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/all-venues' element={<AllVenues />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/add-venue' element={<AddVenue />} />
        <Route path='/my-venues' element={<MyVenues />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/venues/:venueId' element={<SingleVenue />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/:tab' element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
