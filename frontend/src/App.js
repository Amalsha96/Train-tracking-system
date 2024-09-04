import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SearchTrain from './components/SearchTrain';
import TrainLocation from './components/TrainLocation';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/search" element={<SearchTrain />} />
          <Route path="/train-location/:trainId" element={<TrainLocation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
