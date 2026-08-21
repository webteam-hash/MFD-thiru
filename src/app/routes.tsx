import { createBrowserRouter } from 'react-router'
import { lazy } from 'react'
import { Layout } from './components/Layout'
import { ErrorBoundary } from './components/ErrorBoundary'

// Lazy-loaded page components for route-level code splitting & fast page load
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })))
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })))
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })))
const FAQ = lazy(() => import('./pages/FAQ').then(m => ({ default: m.FAQ })))
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })))

// Calculators
const RetirementCalc = lazy(() => import('./pages/calculators/RetirementCalc').then(m => ({ default: m.RetirementCalc })))
const CashFlowCalc = lazy(() => import('./pages/calculators/CashFlowCalc').then(m => ({ default: m.CashFlowCalc })))
const EducationCalc = lazy(() => import('./pages/calculators/EducationCalc').then(m => ({ default: m.EducationCalc })))
const GoalBasedCalc = lazy(() => import('./pages/calculators/GoalBasedCalc').then(m => ({ default: m.GoalBasedCalc })))
const SIPCalc = lazy(() => import('./pages/calculators/SIPCalc').then(m => ({ default: m.SIPCalc })))
const LumpSumCalc = lazy(() => import('./pages/calculators/LumpSumCalc').then(m => ({ default: m.LumpSumCalc })))
const FlexibleCalc = lazy(() => import('./pages/calculators/FlexibleCalc').then(m => ({ default: m.FlexibleCalc })))

// Service Pages
const ServicePage = lazy(() => import('./pages/ServicePage').then(m => ({ default: m.ServicePage })))

// Legal Pages
const CalculatorPolicy = lazy(() => import('./pages/legal/CalculatorPolicy').then(m => ({ default: m.CalculatorPolicy })))
const Disclaimer = lazy(() => import('./pages/legal/Disclaimer').then(m => ({ default: m.Disclaimer })))
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })))
const InvestorGrievance = lazy(() => import('./pages/legal/InvestorGrievance').then(m => ({ default: m.InvestorGrievance })))
const TermsOfUse = lazy(() => import('./pages/legal/TermsOfUse').then(m => ({ default: m.TermsOfUse })))

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, Component: Home },
      { path: 'index.html', Component: Home },
      { path: 'about', Component: About },
      { path: 'blog', Component: Blog },
      { path: 'blog/:id', Component: Blog },
      { path: 'faq', Component: FAQ },
      { path: 'contact', Component: Contact },
      
      // Services
      { path: 'services/retirement-planning', element: <ServicePage title="Retirement Planning" path="/services/retirement-planning" /> },
      { path: 'services/cash-flow-solutions', element: <ServicePage title="Cash Flow & SWP Solutions" path="/services/cash-flow-solutions" /> },
      { path: 'services/education-planning', element: <ServicePage title="Children's Educational Planning" path="/services/education-planning" /> },
      { path: 'services/goal-based-planning', element: <ServicePage title="Goal-Based Mutual Fund Planning" path="/services/goal-based-planning" /> },
      { path: 'services/sip-planning', element: <ServicePage title="Systematic Investment Planning [SIP]" path="/services/sip-planning" /> },
      { path: 'services/lump-sum-investment', element: <ServicePage title="Lump Sum Investment Advice" path="/services/lump-sum-investment" /> },
      { path: 'services/personalized-financial-plans', element: <ServicePage title="Personalized Financial Plans" path="/services/personalized-financial-plans" /> },
      { path: 'services/portfolio-health-review', element: <ServicePage title="Portfolio Health Review" path="/services/portfolio-health-review" /> },

      // Calculators
      { path: 'calculators/retirement', Component: RetirementCalc },
      { path: 'calculators/cash-flow', Component: CashFlowCalc },
      { path: 'calculators/education', Component: EducationCalc },
      { path: 'calculators/goal-based', Component: GoalBasedCalc },
      { path: 'calculators/sip', Component: SIPCalc },
      { path: 'calculators/lump-sum', Component: LumpSumCalc },
      { path: 'calculators/flexible', Component: FlexibleCalc },

      // Legal Pages
      { path: 'calculator-policy', Component: CalculatorPolicy },
      { path: 'disclaimer', Component: Disclaimer },
      { path: 'privacy-policy', Component: PrivacyPolicy },
      { path: 'investor-grievance', Component: InvestorGrievance },
      { path: 'terms-of-use', Component: TermsOfUse },

      // Catch-all 404 route
      { path: '*', Component: NotFound },
    ],
  },
])

