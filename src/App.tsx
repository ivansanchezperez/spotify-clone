import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Home.tsx';
import Settings from './pages/Settings/Settings.tsx';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
