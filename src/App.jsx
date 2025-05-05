import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "./context/UserProvider";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </Router>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
