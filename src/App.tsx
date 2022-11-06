import React from 'react';
import { RecoilRoot } from 'recoil';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <DashBoard />
      </RecoilRoot>
    </div>
  );
}

export default App;
