import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import BlogPage from './pages/Blogs/BlogPage';
import FroSharePage from './pages/FroShare/FroSharePage';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen min-w-full bg-black overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/froshare" element={<FroSharePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
