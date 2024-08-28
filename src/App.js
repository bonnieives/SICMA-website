import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainDiv from './Components/MainDiv';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Home';

function HomePage(){
  return <h1></h1>;
}

function App() {
  return (
    <Router>
           <div className="App">
            <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />

    </Router>

  );
}

export default App;
