import { Navigate, Route, Routes } from "react-router-dom";
import { NoMatch, Dashboard, RegisterUser } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route element={<RegisterUser />} path="/register" />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
