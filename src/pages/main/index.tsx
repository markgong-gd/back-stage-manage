import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Container from './components/container';
import './index.less';

function App() {
  return (
    <Router>
      <Container />
    </Router>
  );
}

export default App;
