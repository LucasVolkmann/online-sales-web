import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRouter } from './modules/login/LoginRouter';

const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <div>Hello world!</div>,
    errorElement: <div>Error</div>,
  },
];

const router = createBrowserRouter([...rootRouter, ...loginRouter]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFC801',
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
);
