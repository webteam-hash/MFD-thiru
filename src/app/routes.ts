import { createBrowserRouter } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { FAQ } from './pages/FAQ'
import { RetirementCalc } from './pages/calculators/RetirementCalc'
import { CashFlowCalc } from './pages/calculators/CashFlowCalc'
import { EducationCalc } from './pages/calculators/EducationCalc'
import { GoalBasedCalc } from './pages/calculators/GoalBasedCalc'
import { SIPCalc } from './pages/calculators/SIPCalc'
import { LumpSumCalc } from './pages/calculators/LumpSumCalc'
import { FlexibleCalc } from './pages/calculators/FlexibleCalc'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'services', Component: Services },
      { path: 'blog', Component: Blog },
      { path: 'faq', Component: FAQ },
      { path: 'contact', Component: Contact },
      { path: 'calculators/retirement', Component: RetirementCalc },
      { path: 'calculators/cash-flow', Component: CashFlowCalc },
      { path: 'calculators/education', Component: EducationCalc },
      { path: 'calculators/goal-based', Component: GoalBasedCalc },
      { path: 'calculators/sip', Component: SIPCalc },
      { path: 'calculators/lump-sum', Component: LumpSumCalc },
      { path: 'calculators/flexible', Component: FlexibleCalc },
    ],
  },
])
