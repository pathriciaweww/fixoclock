import './App.css';
import {Header, About, Reviews, Projects, Contact, Footer} from './containers';
import {Navbar} from './components';
import './styles/global.css';

function App() {
  return (
    <div className='background-gradient'>
      <Navbar/>
      <Header/>
      <About/>
      <Reviews/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
