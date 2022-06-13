import Menu from './components/Menu';
import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from 'components/Menu/PaginaPadrao';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}