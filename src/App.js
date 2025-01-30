import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Movies from './components/movie/movies';
import CoinTracker from './components/coin-tracker';
import TodoList from './components/todo';
import MovieDetail from './components/movie/movie-detail';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/intern-react-movie-yrrah/" element={<Movies />} />
        <Route path="/intern-react-movie-yrrah/movies/:id" element={<MovieDetail />} />
        <Route path="/intern-react-movie-yrrah/coin-tracker" element={<CoinTracker />} />
        <Route path="/intern-react-movie-yrrah/todo-list" element={<TodoList />} />
      </Routes>
      <NavigateToHome />
    </Router>
  );
}

function NavigateToHome() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/intern-react-movie-yrrah/');
    }
  }, [navigate]);

  return null;
}

export default App;