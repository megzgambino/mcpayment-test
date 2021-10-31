import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>BUDGET APP SIMPLIFIED</h1>
      <HomePage/>
    </div>
  )
}

export default App;
