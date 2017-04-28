import React, { Component } from 'react';
import nextArrow from './img/move-forward.png';
import './App.css';


// create the Home Screen 
var HomeScreen = React.createClass ({
  render: function() {
    return (
      <div className="App">
        <div className="App-title">
          <p className="hows">How's</p>
          <p className="nan">Nan</p>
        </div>
        <Next />
      </div>
    )
  }
})

// // create the JourneySplit
// var JourneySplit = React.createClass ({
//   render: function() {
//     return (
//     )
//   }
// })

// // create the RecordId
// var RecordId = React.createClass ({
//   render: function() {
//     return (
//     )
//   }
// })

// // create the AnalyzeSentiment
// var AnalyzeSentiment = React.createClass ({
//   render: function() {
//     return (
//     )
//   }
// })

// // create the RecordSentiment
// var RecordSentiment = React.createClass ({
//   render: function() {
//     return (
//     )
//   }
// })

// // create the SentimentResult
// var SentimentResult = React.createClass ({
//   render: function() {
//     return (
//     )
//   }
// })

// // create the Confirmation
// var Confirmation = React.createClass ({
//   render: function() {
//     return (
//     )
//   }
// })


// create the main javascript class APP
class App extends Component {
  render() {
    return (
      <HomeScreen />
    )
  }
}

class Next extends Component {
  render () {
    return (
      <img className="nextArrow"src={nextArrow} alt="next-arrow" />
    )
  }
}


export default App;
