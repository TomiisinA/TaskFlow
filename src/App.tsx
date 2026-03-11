
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { DashboardLayout } from './layout/DashboardLayout';
import { Dashboard } from './Pages/dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
     
          <Route path='/' element={<Dashboard />} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App
