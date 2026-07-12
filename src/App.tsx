import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Loja from './pages/Loja';
import Produto from './pages/Produto';
import MilLog from './pages/MilLog';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Carrinho from './pages/Carrinho';
import Header from './components/Header';
import Footer from './components/Footer';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/loja/:category" element={<Loja />} />
        <Route path="/produto/:slug" element={<Produto />} />
        <Route path="/mil-log" element={<MilLog />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </Layout>
  );
}
