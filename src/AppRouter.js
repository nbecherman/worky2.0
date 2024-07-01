import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateService from './componentes/CreateService';
import Horario from './componentes/Horario';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CreateService />} />
      <Route path="/horario" element={<Horario />} />
    </Routes>
  </Router>
);

export default AppRouter;
