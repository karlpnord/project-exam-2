import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-whiteBg">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
