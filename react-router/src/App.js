import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import UserProfile from './components/UserProfile';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<UserProfile />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
