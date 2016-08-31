import React from 'react';
import HomeContainer from './home_container';
import EventIndexContainer from './event_index_container';
import NavbarContainer from './navbar_container';


const App = ({children}) => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    {children}
  </div>
);

export default App;