// import { Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/auth/sign-up';

const App = () => {
  return (
    <main className="relative max-w-full w-full h-full">
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
      </Routes>
    </main>
  );
};

export default App;
