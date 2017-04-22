import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import PlayBarContainer from './playbar/playbar_container';

const App = ({ children }) => (
  <div>
    <NavbarContainer />
    { children }
    <PlayBarContainer />
  </div>
);

export default App;
