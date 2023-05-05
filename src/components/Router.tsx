import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';

const Router = () =>
{
  return (
    <>
      <Routes>
        <Route index path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default Router;
