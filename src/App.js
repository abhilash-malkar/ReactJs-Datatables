import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Home from './app/Home';
import NormalTable from './app/Pages/NormalTable';
import FetchTable from './app/Pages/FetchTable';
import CustomTable from './app/Pages/CustomTable';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/normal-table' element={<NormalTable/>}/>
          <Route path='/fetch-table' element={<FetchTable/>}/>
          <Route path='/custom-table' element={<CustomTable/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
