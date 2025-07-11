import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout";
import Home from './Pages/Home';
import About from './Pages/About';
import BlogDetail from './Pages/BlogDetail';
import CardDetail from './Pages/CardDetail';
import Coment from './Pages/Coment';
import Career from './Pages/Career';
import BloqCards from './Pages/BloqCards';
import ScrollToTop from "./Components/ScrollToTop";
import Projects from './Pages/Projects';
import Web from './Pages/Web';
import Bloq from './Pages/Bloq';
import TechSupport from './Pages/TechSupport';
import KorporativMail from './Pages/KorporativMail';
import PaymentIntegration from './Pages/PaymentIntegration'
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coment/" element={<Coment />} />
          <Route path="/bloq/:id" element={<BlogDetail />} />
          <Route path="/card/:id" element={<CardDetail />} />
          <Route path="/career/" element={<Career />} />
          <Route path="/cards/" element={<BloqCards />} />
          <Route path="/projects/" element={<Projects/>} />
          <Route path="/web/" element={<Web/>} />
          <Route path="/bloq/" element={<Bloq/>} />
          <Route path="/techSupport/" element={<TechSupport/>} />
          <Route path="/KorporativMail" element={<KorporativMail />} />
          <Route path="/paymentIntegration" element={<PaymentIntegration/>} />
          <Route path="/portfolio/" element={<Portfolio/>} />
          <Route path="/contact/" element={<Contact/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
