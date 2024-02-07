import type { Router as RemixRouter } from '@remix-run/router';
import { ConfigProvider } from 'antd';
import { useEffect } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { firstScreenRouter } from './modules/firstScreen/routes';
import { loginRouter } from './modules/login/routes';
import { productRoutes } from './modules/products/routes';
import { URL_USER } from './shared/constants/Urls';
import { MethodsEnum } from './shared/enumerations/methods.enum';
import { getAuthorizationToken, verifyLoggedIn } from './shared/functions/connection/auth';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { useNotification } from './shared/hooks/useNotification';
import { useRequests } from './shared/hooks/useRequests';

const freeRoutes: RouteObject[] = [...loginRouter];

const loggedInRoutes: RouteObject[] = [...firstScreenRouter, ...productRoutes].map((route) => ({
  ...route,
  loader: verifyLoggedIn,
}));

const router: RemixRouter = createBrowserRouter([...freeRoutes, ...loggedInRoutes]);

function App() {
  const { contextHolder } = useNotification();
  const { request } = useRequests();
  const { setUser } = useGlobalContext();

  useEffect(() => {
    if (getAuthorizationToken()) {
      request(URL_USER, MethodsEnum.GET, setUser);
    }
  }, []);

  return (
    <div style={{ height: '100%' }}>
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
    </div>
  );
}

export default App;
