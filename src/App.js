import './App.css';
// sections
import Banner from './components/Banner';
import Monitor from './components/desktop/Monitor';
import BlackBar from './components/BlackBar';
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
