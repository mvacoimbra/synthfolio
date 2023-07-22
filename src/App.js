import './App.css';
// sections
import Banner from './components/Banner';
import Monitor from './components/Monitor';
import BlackBar from './components/UI/BlackBar';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Banner />
      <BlackBar />
      <Monitor />
      <BlackBar />
      <Contact />
    </div>
  );
}

export default App;
