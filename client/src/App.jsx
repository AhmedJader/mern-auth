import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import Signup from './pages/signup';
import Signin from './pages/Signin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element ={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
      </Routes>
    </BrowserRouter>
  )
}
