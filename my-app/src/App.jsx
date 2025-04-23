import { Routes, Route, Link } from "react-router-dom";
import StudentList from "./pages/cau2";
import AddStudent from "./pages/cau3";
import DelStudent from "./pages/cau4";
import EditStudent from "./pages/cau5";
import SearchStudent from "./pages/cau6";
import { Cau7 } from "./pages/cau7";
import { Cau8 } from "./pages/cau8"; // 👈 thêm dòng này
import Cau9 from "./componets/StudentList"
import Cau10 from "./pages/cau10";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="flex gap-4 mb-6">
        <Link to="/" className="text-blue-600 hover:underline">📋 Danh sách</Link>
        <Link to="/them" className="text-blue-600 hover:underline">➕ Thêm</Link>
        <Link to="/xoa" className="text-blue-600 hover:underline">❌ Xoá</Link>
        <Link to="/sua" className="text-blue-600 hover:underline">🛠 Sửa</Link>
        <Link to="/tim" className="text-blue-600 hover:underline">🔍 Tìm</Link>
        <Link to="/loc" className="text-blue-600 hover:underline">🏫 Lọc lớp</Link>
        <Link to="/todo" className="text-blue-600 hover:underline">📝 Công việc</Link>
        <Link to="/cau9" className="text-blue-600 hover:underline">📚 Danh sách sinh viên </Link>
        
 <Link to="/cau10" className="text-blue-600 hover:underline">📋 Danh sách sinh viên (Cau10)</Link>
      </nav>

      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/them" element={<AddStudent />} />
        <Route path="/xoa" element={<DelStudent />} />
        <Route path="/sua" element={<EditStudent />} />
        <Route path="/tim" element={<SearchStudent />} />
        <Route path="/loc" element={<Cau7 />} />
        <Route path="/todo" element={<Cau8 />} /> {/* 👈 thêm route này */}
        <Route path="/cau9" element={<Cau9 />} />
        
        <Route path="/cau10" element={<Cau10 />}/>
      </Routes>
    </div>
  );
}

export default App;
