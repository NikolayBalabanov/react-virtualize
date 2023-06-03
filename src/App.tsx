import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Error from './pages/Error';
import { NiceTry } from './pages/NiceTry';
import { EStatus } from './models/task';
import { ThemeProvider } from './context/ThemeContext';
import ReactWindow from './pages/ReactWindow';

function App() {
  return (
    <ThemeProvider>
      <div className="mx-auto min-w-[320px] max-w-[1440px]">
        <Header />
        <Routes>
          <Route path="/" element={<Main filterVal={EStatus.active} />} />
          <Route path="/bad" element={<Main filterVal={EStatus.active} />} />
          <Route path="/nice-try" element={<NiceTry />} />
          <Route path="/react-window" element={<ReactWindow />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
