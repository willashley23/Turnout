import React from 'react';
import HomeContainer from './home_container';
import NavbarContainer from './navbar_container';


const App = ({children}) => (
  <div>
    <header>
      <NavbarContainer />
      <HomeContainer />
    </header>
    {children}
  </div>
);

export default App;