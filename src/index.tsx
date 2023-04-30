import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Router from './components/Router';
import './index.css';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement );
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

reportWebVitals();
