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
import AdminSKCKAirmBawah from './components/Dashboard/DashboardAirmBawah/SKCK-AdminAirmBawah.jsx'
import AdminSKKKAirmBawah from './components/Dashboard/DashboardAirmBawah/SKKK-AdminAirmBawah.jsx'
import AdminSKPAirmBawah from './components/Dashboard/DashboardAirmBawah/SKP-AdminAirmBawah.jsx'
import AdminSKCKWatutumouDua from './components/Dashboard/DashboardWatutumouDua/SKCK-AdminWatutumou2.jsx'
import AdminSKKKWatutumouDua from './components/Dashboard/DashboardWatutumouDua/SKKK-AdminWatutumou2.jsx'
import AdminSKPWatutumouDua from './components/Dashboard/DashboardWatutumouDua/SKP-AdminWatutumou2.jsx'

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
  {
    path: 'Admin-SKCK-AirmBawah',
    element: <AdminSKCKAirmBawah/>
  },
  {
    path: 'Admin-SKKK-AirmBawah',
    element: <AdminSKKKAirmBawah/>
  },
  {
    path: 'Admin-SKP-AirmBawah',
    element: <AdminSKPAirmBawah/>
  },
  {
    path: 'Admin-SKCK-WatutumouDua',
    element: <AdminSKCKWatutumouDua/>
  },
  {
    path: 'Admin-SKKK-WatutumouDua',
    element: <AdminSKKKWatutumouDua/>
  },
  {
    path: 'Admin-SKP-WatutumouDua',
    element: <AdminSKPWatutumouDua/>
  },
];