import type { Router as RemixRouter } from '@remix-run/router';
import { ConfigProvider } from 'antd';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRouter } from './modules/login/LoginRouter';
import { useNotification } from './shared/hooks/useNotification';
const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <div>Hello world!</div>,
    errorElement: <div>Error</div>,
  },
];

const router: RemixRouter = createBrowserRouter([...rootRouter, ...loginRouter]);

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
