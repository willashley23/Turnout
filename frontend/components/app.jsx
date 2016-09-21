import React from 'react';
import HomeContainer from './home/home_container';
import EventIndexContainer from './event/event_index_container';
import NavbarContainer from './home/navbar_container';

const App = ({children}) => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    {children}
  </div>
);

export default App;