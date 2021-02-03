import './global-styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Software from './components/Software/Software'
import Hardware from './components/Hardware/Hardware'
import Entrepenuer from './components/Entreprenuer/Entreprenuer'
import Home from './components/Home/Home'


function App() {
  return (
    <Router>
      <div className='app debug flex-column pv5 pv0-ns'>
        <NavBar />
        <Switch>
          <Route path='/software'><Software /></Route>
          <Route path='/hardware'><Hardware /></Route>
          <Route path='/entreprenuer'><Entrepenuer /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
