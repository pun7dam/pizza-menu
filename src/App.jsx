import './App.css';
import Header from './components/header.jsx';
import MenuPage from './components/MenuPage.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return <div className="min-h-screen bg-yellow-50 text-gray-800 font-sans flex flex-col items-center justify-start py-10 px-4">

    {/* Header Component */}
    <Header />
    {/* Menu Page Component */}
    <MenuPage />
    {/* Footer Component */}
    <Footer />
  </div>;
}

export default App;


