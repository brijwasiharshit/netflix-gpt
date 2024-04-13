import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';

const browserRouter = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/browse', element: <Browse /> },
]);

function App() {
  return (
    <RouterProvider router={browserRouter} />
  );
}

export default App;
