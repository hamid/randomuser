import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './App.css';

import MainLayout from './layout/main/Main';

//- Screens
const Home    = lazy(() => import('./screen/Home/Home'));
const About = lazy(() => import('./screen/About/About'));

const App = () =>{
  
  const { t } = useTranslation();

  return <Router>
    <Suspense fallback={<div>{t('loading')}</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
};

export default App;
