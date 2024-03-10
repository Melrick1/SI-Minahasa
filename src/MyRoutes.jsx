import Homepage from '/src/components/Homepage/Homepage.jsx'
import LoginAdmin from './components/SignIn/SigninAdmin.jsx'
import LoginMasyarakat from './components/SignIn/SigninMasyarakat.jsx'
import SignUp from './components/SignIn/SignUp.jsx'
import MasyarakatAirmBawah from './components/LandingPages/M-AirmBawah.jsx'
import MasyarakatWatutumouDua from './components/LandingPages/M-WatutumouDua.jsx'
import SKCKAirmBawah from './components/Questionnaire/Pages/Q-AirmBawah/SKCK-AirmBawah.jsx'
import SKKKAirmBawah from './components/Questionnaire/Pages/Q-AirmBawah/SKKK-AirmBawah.jsx'
import SKPAirmBawah from './components/Questionnaire/Pages/Q-AirmBawah/SKP-AirmBawah.jsx'
import SKCKWatutumouDua from './components/Questionnaire/Pages/Q-DesaWatutumou2/SKCK-Watutumou2.jsx'
import SKKKWatutumouDua from './components/Questionnaire/Pages/Q-DesaWatutumou2/SKKK-Watutumou2.jsx'
import SKPWatutumouDua from './components/Questionnaire/Pages/Q-DesaWatutumou2/SKP-Watutumou2.jsx'
import DashboardAirmBawah from './components/Dashboard/DashboardAirmBawah.jsx'
import DashboardWatutumou from './components/Dashboard/DashboardWatutumou.jsx'

export const MyRoutes = [
  {
    path: '/',
    element: <Homepage/>,
  },
  {
    path: '/login-admin',
    element: <LoginAdmin/>
  },
  {
    path: '/login-masyarakat',
    element: <LoginMasyarakat/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/Masyarakat-AirmBawah',
    element: <MasyarakatAirmBawah/>
  },
  {
    path: '/Masyarakat-WatutumouDua',
    element: <MasyarakatWatutumouDua/>
  },
  {
    path: '/Admin-AirmBawah',
    element: <DashboardAirmBawah/>
  },
  {
    path: '/Admin-WatutumouDua',
    element: <DashboardWatutumou/>
  },
  {
    path: '/SKCK-AirmBawah',
    element: <SKCKAirmBawah/>
  },
  {
    path: '/SKKK-AirmBawah',
    element: <SKKKAirmBawah/>
  },
  {
    path: '/SKP-AirmBawah',
    element: <SKPAirmBawah/>
  },
  {
    path: '/SKCK-WatutumouDua',
    element: <SKCKWatutumouDua/>
  },
  {
    path: '/SKKK-WatutumouDua',
    element: <SKKKWatutumouDua/>
  },
  {
    path: '/SKP-WatutumouDua',
    element: <SKPWatutumouDua/>
  },
];