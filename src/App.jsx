// import { Routes } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import SignUp from '@/pages/auth/sign-up';
import SignIn from '@/pages/auth/sign-in';
import Footer from '@/components/Footer';
import CreativeCampaigns from '@/pages/products/CreativeCampaign';
import Pricing from '@/pages/Pricing';
import BrandIdentiyDesign from '@/pages/products/BrandIdentiyDesign';
import SocialMediaManagement from '@/pages/products/SocialMediaManagement';
// import SocialMediaManagement from '@/pages/products/';
import PresentationDesign from '@/pages/products/PresentationDesign';

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
        <Route
          path="/products/brand-identity-designs"
          element={<BrandIdentiyDesign />}
        />
        <Route
          path="/products/social-media-management"
          element={<SocialMediaManagement />}
        />
        <Route
          path="/products/presentation-designs"
          element={<PresentationDesign />}
        />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
