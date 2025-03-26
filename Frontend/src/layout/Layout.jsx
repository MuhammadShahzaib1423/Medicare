import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routes from '../routes/Routers';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow whitecolor">
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;