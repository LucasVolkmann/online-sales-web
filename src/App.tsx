import type { Router as RemixRouter } from '@remix-run/router';
import { ConfigProvider } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { firstScreenRouter } from './modules/firstScreen/routes';
import { loginRouter } from './modules/login/routes';
import { productRoutes } from './modules/products/routes';
import { useNotification } from './shared/hooks/useNotification';

const router: RemixRouter = createBrowserRouter([
  ...firstScreenRouter,
  ...loginRouter,
  ...productRoutes,
]);

function App() {
  const { contextHolder } = useNotification();

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
