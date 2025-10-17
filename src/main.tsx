import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { BoutiquePage } from '@/pages/BoutiquePage';
import { CampusFrancePage } from '@/pages/CampusFrancePage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { TermsOfServicePage } from '@/pages/TermsOfServicePage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/boutique",
    element: <BoutiquePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/boutique/:productId",
    element: <ProductDetailPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/campus-france",
    element: <CampusFrancePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/a-propos",
    element: <AboutPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/politique-de-confidentialite",
    element: <PrivacyPolicyPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/conditions-d-utilisation",
    element: <TermsOfServicePage />,
    errorElement: <RouteErrorBoundary />,
  },
]);
// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
)