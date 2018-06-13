import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Accueil from './Accueil';
import Download from './Download';
import Contact from './Contact';
import Inscription from './Inscription';
import Connexion from './Connexion';

class App extends Component {
  render() {
    return (
        <div className="App">
        
          <header role="header">
            <nav className="menu" role="navigation">
            <Router>
                <div className="inner">
                  <div className="m-left">
                  <Link to={"/Accueil"}><h1 className="logo">Dreamtale</h1></Link>
                  </div>
                  <div className="m-right">
                    <Link to='/Accueil'  className="m-link">Accueil</Link>
                    <Link to='/Download' className="m-link">Téléchargement</Link>
                    <Link to='/Contact' className="m-link">Contact</Link>
                    <Link to='/Inscription' className="m-link">Inscription</Link>
                    <Link to='/Connexion' className="m-link">Connexion</Link>

                    <Route exact path='/' component={Accueil}/>
                    <Route path='/Accueil' component={Accueil}/>
                    <Route path='/Download' component={Download}/>
                    <Route path='/Contact' component={Contact}/>
                    <Route path='/Inscription' component={Inscription}/>
                    <Route path='/Connexion' component={Connexion}/>
                  </div>
              </div>
              </Router>
            </nav>
          </header>
          
        </div>
    );
  }
}

export default App;
