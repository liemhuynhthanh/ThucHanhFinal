// src/components/StudentList.jsx
import { useEffect, useState } from "react";
import StudentItem from "./StudentItem"; // Import component StudentItem

const LOCAL_KEY = "student-list";

function StudentList() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : [
      { id: 1, name: "Nguyễn Văn A", class: "6A", age: 12 },
      { id: 2, name: "Trần Thị B", class: "6B", age: 13 },
    ];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(students));
  }, [students]);

  const handleDelete = (id) => {
    const updated = students.filter((student) => student.id !== id);
    setStudents(updated);
  };

  const handleEdit = (id) => {
    // This is just an example of how to handle editing
    const student = students.find((s) => s.id === id);
    console.log("Editing student: ", student);
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

export default StudentList;
