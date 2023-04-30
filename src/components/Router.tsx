import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../pages/Main';

const Router = () =>
{
    const navigate = useNavigate();

        return (
          <>
            <Routes>
              <Route index path='/' element={<Main />} />
            </Routes>
          </>
        );
}

export default Router;
