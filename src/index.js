//Import des dépendances
import React from 'react';
import ReactDOM from 'react-dom';
import './include/header.css';
import './include/style.css';
import Header_render from './component/Header_render';
import App_body from './App_body';


ReactDOM.render(<Header_render />, document.getElementById('root'));
ReactDOM.render(<App_body />, document.getElementById('titre'));
