import AdManagementPage from '../pages/AdManagementPage';
import DashboardPage from '../pages/DashboardPage';

export interface RouteType {
  path: string;
  element: React.ReactElement;
}

export const routes = [
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/ad-management',
    element: <AdManagementPage />,
  },
];
