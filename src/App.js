import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
