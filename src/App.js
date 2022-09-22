import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header/>
     <Countries></Countries>
     <Footer/>
    </div>
  );
}


export default App;
