import {useRoutes} from 'hookrouter';

import Routes from './routes/Routes';
import './App.css';

function App() {
  const routeResult = useRoutes(Routes)
  return routeResult;
}

export default App;