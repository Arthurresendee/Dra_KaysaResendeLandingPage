import {Routes, Route} from 'react-router-dom';

import {Home} from './Pages/Home';
import {Galeria} from './Pages/Galeria';

export function Router() {
   return (
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<Galeria />} />
         </Routes>
   )
}