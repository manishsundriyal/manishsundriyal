import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import components
import HomePage from './components/homePage/homePage';

function App() {
  return (
    <HomePage />
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
