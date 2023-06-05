import Home from "./components/pages/Home";
import Header from "./components/blocks/Header";
import Footer from "./components/blocks/Footer";
import AppRoutes from "./AppRouter";

function App() {
  return (
    <div className="app container">
    <Header />

    <main className="container">
        <AppRoutes />
    </main>
    
    <Footer />
   </div>
  );
}

export default App;
