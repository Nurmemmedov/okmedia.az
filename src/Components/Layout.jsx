import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen  overflow-y-hidden overflow-x-hidden">
      <Header />
      <main className="flex-grow overflow-x-hidden overflow-y-hidden">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}
