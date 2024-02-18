import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <Header/>
      <Filter/>
      <Summary/>
    </div>
  );
}

export default App;
