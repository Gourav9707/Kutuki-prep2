import './App.css';
import {Switch, BrowserRouter,Route} from "react-router-dom";
import LiveClass from './screens/LiveClass'
import Maths from './screens/Maths'
import Phonics from './screens/Phonics'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
    <div className='page-container'>
     <Header/>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LiveClass}/>
        <Route exact path='/maths' component={Maths}/>
        <Route exact path='/phonics' component={Phonics}/>
      </Switch>
    </BrowserRouter>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
