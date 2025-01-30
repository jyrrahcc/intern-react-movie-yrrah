import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Movies from './components/movie/movies';
import CoinTracker from './components/coin-tracker';
import TodoList from './components/todo';
import MovieDetail from './components/movie/movie-detail';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/coin-tracker" element={<CoinTracker />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;