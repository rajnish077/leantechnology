import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import FloatingMenu from "./components/FloatingMenu";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <MainContent />
      <FloatingMenu />
    </div>
  );
};

export default App;
