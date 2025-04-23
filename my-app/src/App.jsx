import { Routes, Route, Link } from "react-router-dom";
import StudentList from "./pages/cau2";
import AddStudent from "./pages/cau3";
import DelStudent from "./pages/cau4";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="flex gap-4 mb-6">
        <Link to="/" className="text-blue-600 hover:underline">📋 Danh sách sinh viên</Link>
        <Link to="/them" className="text-blue-600 hover:underline">➕ Thêm sinh viên</Link>
        <Link to="/xoa" className="text-blue-600 hover:underline">❌ Xoá sinh viên</Link>
      </nav>

      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/them" element={<AddStudent />} />
        <Route path="/xoa" element={<DelStudent />} />
      </Routes>
    </div>
  );
}

export default App;
