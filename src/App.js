import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header/Header';
import HomePage from './components/pages/HomePage/HomePage';

function App() {
  return (
    <>
    <Header />
    
      <HomePage />
   
    </>
  );
}

export default App;
