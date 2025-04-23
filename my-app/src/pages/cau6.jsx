import { useState } from "react";

const initialStudents = [
  { id: 1, name: "Nguyễn Văn A", class: "6A", age: 12 },
  { id: 2, name: "Trần Thị B", class: "6B", age: 13 },
  { id: 3, name: "Lê Văn C", class: "6C", age: 12 },
];

function Cau6() {
  const [students] = useState(initialStudents);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">🔍 Tìm kiếm sinh viên</h1>
        <input
          type="text"
          placeholder="Nhập tên sinh viên..."
          value={search}
          onChange={handleSearchChange}
          className="w-full border px-4 py-2 mb-4 rounded shadow-sm"
        />
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Tên</th>
              <th className="p-3">Lớp</th>
              <th className="p-3">Tuổi</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{student.name}</td>
                  <td className="p-3">{student.class}</td>
                  <td className="p-3">{student.age}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center text-gray-500 py-4">
                  Không tìm thấy sinh viên nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cau6;
