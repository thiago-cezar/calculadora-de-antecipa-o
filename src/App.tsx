import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthContext";
import Routes from "./routes";
function App() {
  return (
    <AuthProvider>
      <Toaster />
      <Routes />
    </AuthProvider>
  );
}

export default App;
