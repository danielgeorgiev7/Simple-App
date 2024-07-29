import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <Header />
      <Users />
      <Footer />
      <ToastContainer />
    </AppProvider>
  );
}

export default App;
