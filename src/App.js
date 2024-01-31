import React from 'react';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetail from './components/ShowDetail';

const App = () => {
  return (
      <div>
      <RouterProvider router={appRouter}/>
      <Outlet/>
      </div>

  );
};
export const appRouter = createBrowserRouter([
  {
      path:"/",
      element:<ShowList/>
  },
  {
      path:"/show/:id",
      element:<ShowDetail/>
  }
]);

export default App;
