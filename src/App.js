import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navibar';
import About from './pages/About';
import Home from './pages/Home';
import Users from './pages/Users';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
      <Navibar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/users" component={Users} />
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
