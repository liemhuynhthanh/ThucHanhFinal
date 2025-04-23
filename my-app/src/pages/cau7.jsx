import { useState } from "react";

const initialStudents = [
  { id: 1, name: "Nguyễn Văn A", class: "6A", age: 12 },
  { id: 2, name: "Trần Thị B", class: "6B", age: 13 },
  { id: 3, name: "Lê Văn C", class: "6A", age: 12 },
  { id: 4, name: "Phạm Văn D", class: "6C", age: 13 },
];

export function Cau7() {
  const [students] = useState(initialStudents);
  const [selectedClass, setSelectedClass] = useState("");

  const classes = [...new Set(students.map((s) => s.class))]; // Lấy danh sách lớp không trùng

  const filtered = selectedClass
    ? students.filter((s) => s.class === selectedClass)
    : students;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">🏫 Lọc sinh viên theo lớp</h1>
        
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="mb-4 border px-4 py-2 rounded w-full"
        >
          <option value="">-- Chọn lớp --</option>
          {classes.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Tên</th>
              <th className="p-3">Lớp</th>
              <th className="p-3">Tuổi</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{student.name}</td>
                  <td className="p-3">{student.class}</td>
                  <td className="p-3">{student.age}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center text-gray-500 py-4">
                  Không có sinh viên nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
