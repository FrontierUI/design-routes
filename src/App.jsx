import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Home from '@/pages/Home';
import Pricing from '@/pages/Pricing';
import About from '@/pages/About';
import OurWork from '@/pages/our-work/OurWork';
import BookACall from '@/pages/BookACall';

import SignUp from '@/pages/auth/sign-up';
import SignIn from '@/pages/auth/sign-in';

import CreativeCampaigns from '@/pages/products/CreativeCampaign';
import BrandIdentiyDesign from '@/pages/products/BrandIdentiyDesign';
import SocialMediaManagement from '@/pages/products/SocialMediaManagement';
import PresentationDesign from '@/pages/products/PresentationDesign';
import WebDesignDev from '@/pages/products/WebDesignDev';
import AppDesignDev from '@/pages/products/AppDesignDev';

import ForAgencies from '@/pages/verticals/ForAgencies';
import ForBrands from '@/pages/verticals/ForBrands';
import SME from '@/pages/verticals/SME';

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
          path="/products/web-design-and-development"
          element={<WebDesignDev />}
        />
        <Route
          path="/products/app-design-and-development"
          element={<AppDesignDev />}
        />
        <Route
          path="/products/presentation-designs"
          element={<PresentationDesign />}
        />
        <Route path="/vertical/for-agencies" element={<ForAgencies />} />
        <Route path="/vertical/for-brands" element={<ForBrands />} />
        <Route
          path="/vertical/small-and-medium-sized-enterprise"
          element={<SME />}
        />

        <Route path="/about-us" element={<About />} />
        <Route path="/book-a-call" element={<BookACall />} />
        <Route path="/our-work" element={<OurWork />} />

        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
