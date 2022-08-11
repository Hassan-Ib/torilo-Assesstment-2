import { Navigate, Route, Routes } from "react-router-dom";
import { NoMatch, Dashboard, RegisterUser } from "./routes";
import User from "./components/Users";
import Post from "./components/Posts";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<User />} />
        <Route path="posts" element={<Post />} />
      </Route>
      <Route element={<RegisterUser />} path="/register" />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
