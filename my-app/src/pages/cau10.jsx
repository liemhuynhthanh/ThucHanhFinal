// src/pages/cau10.jsx
import React, { useState, useEffect } from "react";
import StudentItem from "../componets/StudentItem"; // Giả sử có một component StudentItem

const LOCAL_KEY = "student-list";

function Cau10() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : [
      { id: 1, name: "Nguyễn Văn A", class: "6A", age: 12 },
      { id: 2, name: "Trần Thị B", class: "6B", age: 13 },
    ];
  });

  const [editingStudent, setEditingStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({ name: "", class: "", age: "" });
  const [selectedClass, setSelectedClass] = useState(""); // State để lưu lớp được chọn

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(students));
  }, [students]);

  const handleDelete = (id) => {
    const updated = students.filter((student) => student.id !== id);
    setStudents(updated);
  };

  const handleEdit = (id) => {
    const student = students.find((s) => s.id === id);
    setEditingStudent(student);
    setNewStudent({ name: student.name, class: student.class, age: student.age });
  };

  const handleSaveEdit = () => {
    const updatedStudents = students.map((student) =>
      student.id === editingStudent.id
        ? { ...student, ...newStudent }
        : student
    );
    setStudents(updatedStudents);
    setEditingStudent(null);
    setNewStudent({ name: "", class: "", age: "" });
  };

  const handleAddStudent = () => {
    const newStudentObj = {
      id: Date.now(), // Sử dụng timestamp làm id
      name: newStudent.name,
      class: newStudent.class,
      age: Number(newStudent.age),
    };
    setStudents([...students, newStudentObj]);
    setNewStudent({ name: "", class: "", age: "" });
  };

  // Lọc sinh viên theo lớp
  const filteredStudents = selectedClass
    ? students.filter((student) => student.class === selectedClass)
    : students;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">📋 Danh sách sinh viên</h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">➕ Thêm sinh viên</h2>
          <div className="flex gap-4">
            <input
              type="text"
              className="border p-2 rounded"
              placeholder="Tên"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            />
            <input
              type="text"
              className="border p-2 rounded"
              placeholder="Lớp"
              value={newStudent.class}
              onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
            />
            <input
              type="number"
              className="border p-2 rounded"
              placeholder="Tuổi"
              value={newStudent.age}
              onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handleAddStudent}
            >
              Thêm
            </button>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">🔍 Lọc theo lớp</h2>
          <select
            className="border p-2 rounded"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">Tất cả</option>
            <option value="6A">6A</option>
            <option value="6B">6B</option>
            <option value="6C">6C</option>
            {/* Thêm các lớp khác nếu cần */}
          </select>
        </div>

        <h2 className="text-xl font-semibold mb-4">📋 Danh sách sinh viên</h2>
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
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
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

        {editingStudent && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">🛠 Chỉnh sửa sinh viên</h2>
            <div className="flex gap-4">
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Tên"
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              />
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Lớp"
                value={newStudent.class}
                onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
              />
              <input
                type="number"
                className="border p-2 rounded"
                placeholder="Tuổi"
                value={newStudent.age}
                onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
              />
              <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={handleSaveEdit}
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cau10;
