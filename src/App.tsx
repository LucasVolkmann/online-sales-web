import type { Router as RemixRouter } from '@remix-run/router';
import { ConfigProvider } from 'antd';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { firstScreenRouter } from './modules/firstScreen/routes';
import { loginRouter } from './modules/login/routes';
import { productRoutes } from './modules/products/routes';
import { verifyLoggedIn } from './shared/functions/connection/auth';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { useNotification } from './shared/hooks/useNotification';

function App() {
  const { contextHolder } = useNotification();
  const { user, setUser } = useGlobalContext();

  const freeRoutes: RouteObject[] = [...firstScreenRouter, ...loginRouter];

  const loggedInRoutes: RouteObject[] = [...productRoutes].map((route) => ({
    ...route,
    loader: () => verifyLoggedIn(setUser, user),
  }));

  const router: RemixRouter = createBrowserRouter([...freeRoutes, ...loggedInRoutes]);

  return (
    <>
      {contextHolder}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#FFC801',
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;
