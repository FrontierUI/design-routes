// import { Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <main className="relative wrappered z-[1] w-full max-w-full h-full">
      <div className="flexy w-full">
        <Navbar />
      </div>

      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
