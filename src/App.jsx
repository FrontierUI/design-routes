import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const OurWork = lazy(() => import('@/pages/OurWork'));
const BookACall = lazy(() => import('@/pages/BookACall'));

const SignIn = lazy(() => import('@/pages/auth/sign-in'));
const SignUp = lazy(() => import('@/pages/auth/sign-up'));

const CreativeCampaigns = lazy(() =>
  import('@/pages/products/CreativeCampaign')
);
const AppDesignDev = lazy(() => import('@/pages/products/AppDesignDev'));
const BrandIdentiyDesign = lazy(() =>
  import('@/pages/products/BrandIdentiyDesign')
);
const WebDesignDev = lazy(() => import('@/pages/products/WebDesignDev'));
const PresentationDesign = lazy(() =>
  import('@/pages/products/PresentationDesign')
);
const SocialMediaManagement = lazy(() =>
  import('@/pages/products/SocialMediaManagement')
);

const SME = lazy(() => import('@/pages/verticals/SME'));
const ForBrands = lazy(() => import('@/pages/verticals/ForBrands'));
const ForAgencies = lazy(() => import('@/pages/verticals/ForAgencies'));

const LoadingFallback = () => {
  return (
    <div className="loading flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        <div className="w-32 h-32 animate-bounce">
          <img
            src="/images/routeslogo.svg"
            alt="Loading"
            className="w-32 h-32 animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
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
    </Suspense>
  );
};

export default App;
