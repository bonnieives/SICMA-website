import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainDiv from './Components/MainDiv';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function HomePage(){
  return <h1></h1>;
}

function App() {
  return (
    <Router>
           <div className="App">
            <Navbar />
            <MainDiv />
        </div>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>

    </Router>

  );
}

export default App;
