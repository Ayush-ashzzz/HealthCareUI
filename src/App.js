import logo from './logo.svg';
import './App.css';
import Card from './components/card/card';
import Page from './components/main page/page';
import GridMenu from './components/gridmenu/gridmenu';
import Containermenu from './components/containermenu/containermenu';
import Footer from './components/containermenu/footer/Footer';




function App() {
  return (
    <div className="App">
     <Page />
     <GridMenu />
     <Containermenu />
     <Footer />
    </div>
  );
}

export default App;
