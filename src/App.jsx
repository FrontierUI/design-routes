// import { Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/auth/sign-up';
import SignIn from './pages/auth/sign-in';
import Footer from './components/Footer';
import CreativeCampaigns from './pages/products/CreativeCampaign';
import Pricing from './pages/Pricing';

const App = () => {
  return (
    <main className="relative max-w-full w-full h-full overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route
          path="/products/creative-campaigns"
          element={<CreativeCampaigns />}
        />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
