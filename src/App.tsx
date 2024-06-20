// App.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
