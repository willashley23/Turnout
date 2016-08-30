import React from 'react';
import HomeContainer from './home_container';


const App = ({children}) => (
  <div>
    <header>
      <HomeContainer />
    </header>
    {children}
  </div>
);

export default App;