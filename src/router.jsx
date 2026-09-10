import './index.scss';
import App from './App';
import './pages/eventos/index.scss';
import Eve from './pages/eventos/index.jsx';
import './index.scss';
import Login from './pages/login/index.jsx';
import './index.scss';
import ERRO from './pages/error/index.jsx'

import {BrowserRouter,Routes,Route} from 'react-router-dom';

export default function router(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/eventos' element={<Eve/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<ERRO/>}/>
          </Routes>
        </BrowserRouter>
    )
}