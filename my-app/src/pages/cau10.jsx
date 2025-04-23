// src/pages/cau10.jsx
import React from "react";
import StudentItem from "../componets/StudentItem"; // Giả sử có một component StudentItem

const LOCAL_KEY = "student-list";

function Cau10() {
  const [students, setStudents] = React.useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : [
      { id: 1, name: "Nguyễn Văn A", class: "6A", age: 12 },
      { id: 2, name: "Trần Thị B", class: "6B", age: 13 },
    ];
  });

  const handleDelete = (id) => {
    const updated = students.filter((student) => student.id !== id);
    setStudents(updated);
  };

  const handleEdit = (id) => {
    const student = students.find((s) => s.id === id);
    console.log("Editing student: ", student);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">📋 Danh sách sinh viên</h1>
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
            {students.length > 0 ? (
              students.map((student) => (
                <StudentItem
                  key={student.id}
                  student={student}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))
            ) : (
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

export default Cau10;
