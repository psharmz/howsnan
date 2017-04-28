import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { HashRouter as Router, Route } from 'react-router-dom';
// import routes from './routes'; 

/**
 * Import all page components here
 */
import App from './App';
// import HomeScreen from './HomeScreen';
// import JourneySplit from './JourneySplit';
// import RecordId from './RecordId';
// import AnalyzeSentiment from './AnalyzeSentiment';
// import RecordSentiment from './RecordSentiment';
// import SentimentResult from './SentimentResult';
// import Confirmation from './Confirmation';


ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);