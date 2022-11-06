import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Routers from './components/Routers';
import { routes } from './utils/routes';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routers routes={routes} />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
