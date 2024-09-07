import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrainPage from './pages/TrainPage';
import TrainList from './components/TrainList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TrainList />} />
          <Route path="/train/:trainId" element={<TrainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
