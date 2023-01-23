import AuthProvider from "./providers/AuthContext";
import Routes from "./routes";
function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
