import { lazy } from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import config from '../config';
import { AppLayout } from '../components';

const Articles = lazy(() => import('../views/Articles/Articles'));
const Attachments = lazy(() => import('../views/Attachments/Attachments'));
const Categories = lazy(() => import('../views/Categories/Categories'));
const Dashboard = lazy(() => import('../views/Dashboard/Dashboard'));
const Error = lazy(() => import('../views/Error/Error'));
const Login = lazy(() => import('../views/Login/Login'));
const Members = lazy(() => import('../views/Members/Members'));
const Menu = lazy(() => import('../views/Menu/Menu'));
const Messages = lazy(() => import('../views/Messages/Messages'));
const Pages = lazy(() => import('../views/Pages/Pages'));
const PasswordRecovery = lazy(() => import('../views/PasswordRecovery/PasswordRecovery'));
const Profile = lazy(() => import('../views/Profile/Profile'));
const Settings = lazy(() => import('../views/Settings/Settings'));
const Tags = lazy(() => import('../views/Tags/Tags'));
const Translations = lazy(() => import('../views/Translations/Translations'));
const Users = lazy(() => import('../views/Users/Users'));

const PATH_ID_PARAM_SUFFIX = '/:id';
const PATH_PANEL_PARAM_SUFFIX = '/:panel';
const PATH_TOKEN_PARAM_SUFFIX = '/:token';

const AppRouter = () => {
  const { routes } = config;

  const router = createBrowserRouter([
    {
      id: 'view.error',
      path: '*',
      element: <Error code={404} />,
    },

    {
      path: '/',
      element: <Navigate replace to={routes.login.path} />,
    },

    {
      id: 'view.login',
      path: routes.login.path,
      element: <Login />,
    },
    {
      id: 'view.passwordRecovery',
      path: routes.passwordRecovery.path,
      element: <PasswordRecovery />,
      children: [
        {
          id: 'view.passwordRecovery.confirm',
          path: `${routes.passwordRecovery.path}${PATH_TOKEN_PARAM_SUFFIX}`,
          element: <PasswordRecovery />,
        },
      ],
    },

    {
      element: <AppLayout />,
      children: [
        {
          id: 'view.dashboard',
          path: routes.dashboard.path,
          element: <Dashboard />,
        },
        {
          id: 'view.profile',
          path: routes.profile.path,
          element: <Profile />,
        },

        {
          id: 'view.articles',
          path: routes.articles.path,
          element: <Articles />,
          children: [
            {
              id: 'view.articles.detail',
              path: `${routes.articles.path}${PATH_ID_PARAM_SUFFIX}`,
              element: <Articles />,
            },
          ],
        },
        {
          id: 'view.attachments',
          path: routes.attachments.path,
          element: <Attachments />,
          children: [
            {
              id: 'view.attachments.detail',
              path: `${routes.attachments.path}${PATH_ID_PARAM_SUFFIX}`,
              element: <Attachments />,
            },
          ],
        },
        {
          id: 'view.categories',
          path: routes.categories.path,
          element: <Categories />,
          children: [
            {
              id: 'view.categories.detail',
              path: `${routes.categories.path}${PATH_ID_PARAM_SUFFIX}`,
              element: <Categories />,
            },
          ],
        },
        {
          id: 'view.members',
          path: routes.members.path,
          element: <Members />,
          children: [
            {
              id: 'view.members.detail',
              path: `${routes.members.path}${PATH_ID_PARAM_SUFFIX}`,
              element: <Members />,
            },
          ],
        },
        {
          id: 'view.pages',
          path: routes.pages.path,
          element: <Pages />,
          children: [
            {
              id: 'view.pages.detail',
              path: `${routes.pages.path}${PATH_ID_PARAM_SUFFIX}`,
              element: <Pages />,
            },
          ],
        },
        {
          id: 'view.tags',
          path: routes.tags.path,
          element: <Tags />,
          children: [
            {
              id: 'view.tags.detail',
              path: `${routes.tags.path}${PATH_ID_PARAM_SUFFIX}`,
              element: <Tags />,
            },
          ],
        },
        {
          id: 'view.users',
          path: routes.users.path,
          element: <Users />,
          children: [
            {
              id: 'view.users.detail',
              path: `${routes.users.path}${PATH_ID_PARAM_SUFFIX}`,
              element: <Users />,
            },
          ],
        },
        {
          id: 'view.menu',
          path: routes.menu.path,
          element: <Menu />,
          children: [
            {
              id: 'view.menu.detail',
              path: `${routes.menu.path}${PATH_ID_PARAM_SUFFIX}`,
              element: <Menu />,
            },
          ],
        },
        {
          id: 'view.messages',
          path: routes.messages.path,
          element: <Messages />,
          children: [
            {
              id: 'view.messages.detail',
              path: `${routes.messages.path}${PATH_ID_PARAM_SUFFIX}`,
              element: <Messages />,
            },
          ],
        },
        {
          id: 'view.translations',
          path: routes.translations.path,
          element: <Translations />,
          children: [
            {
              id: 'view.translations.detail',
              path: `${routes.translations.path}${PATH_ID_PARAM_SUFFIX}`,
              element: <Translations />,
            },
          ],
        },
        {
          path: routes.settings.path,
          element: <Navigate replace to={`${routes.settings.path}/${routes.settings.panels.global}`} />,
        },
        {
          id: 'view.settings',
          path: routes.settings.path,
          element: <Settings />,
          children: [
            {
              id: 'view.settings.panel',
              path: `${routes.settings.path}${PATH_PANEL_PARAM_SUFFIX}`,
              element: <Settings />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
