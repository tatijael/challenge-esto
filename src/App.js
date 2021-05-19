import logo from './logo.svg';
import './App.css';

import { Footer, Header, Howitworks, PreFooter } from './components'
import { Content } from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Howitworks/>
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
