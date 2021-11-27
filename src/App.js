import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom.css';
import AuthProvider from './components/Context/AuthProvider';
import Home from './components/Home/Home';
import AppRoute from './pages/AppRoute/AppRoute';

function App() {
  return (
    <>
      

      <AuthProvider>
        
        
      <AppRoute>
        <Home></Home>
        </AppRoute>
     </AuthProvider>
    

    </>
  );
}

export default App;
