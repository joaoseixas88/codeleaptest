
import { Main } from "./pages/Main";
import { Provider } from 'react-redux'
import { store } from './redux/configureStore/configureStore';
import  AppRoutes  from "./routes/routes";
import './global/styles.css';
import { Login } from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <AppRoutes/>      
      </div>      
    </Provider>
  );
}

export default App;





