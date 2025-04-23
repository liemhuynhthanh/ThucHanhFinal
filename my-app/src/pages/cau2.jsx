// cau2.jsx
import { useState } from "react";

const initialStudents = [
  { id: 1, name: "Nguyễn Văn A", class: "6A", age: 12 },
  { id: 2, name: "Trần Thị B", class: "6B", age: 13 },
];

function Cau2() {
  const [students, setStudents] = useState(initialStudents);

  const handleDelete = (id) => {
    const updatedList = students.filter((student) => student.id !== id);
    setStudents(updatedList);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">📋 Danh sách sinh viên</h1>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Tên</th>
              <th className="p-3">Lớp</th>
              <th className="p-3">Tuổi</th>
              <th className="p-3 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.class}</td>
                <td className="p-3">{student.age}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
            {students.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-4">
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

export default Cau2;
