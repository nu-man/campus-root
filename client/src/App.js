import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Blog from './pages/Blog';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/blog' element={<Blog/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
