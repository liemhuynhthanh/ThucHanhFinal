import { useState } from "react";

const initialStudents = [
  { id: 1, name: "Nguyễn Văn A", class: "6A", age: 12 },
  { id: 2, name: "Trần Thị B", class: "6B", age: 13 },
  { id: 3, name: "Lê Văn C", class: "6C", age: 12 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [form, setForm] = useState({ name: "", class: "", age: "" });

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!form.name || !form.class || !form.age) return alert("Vui lòng nhập đầy đủ thông tin");
    const newStudent = {
      id: Date.now(),
      name: form.name,
      class: form.class,
      age: parseInt(form.age),
    };
    setStudents([...students, newStudent]);
    setForm({ name: "", class: "", age: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">📋 Danh sách sinh viên</h1>

        {/* Form thêm sinh viên */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block mb-1 font-semibold">Họ tên</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Lớp</label>
            <input
              type="text"
              name="class"
              value={form.class}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="6A"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Tuổi</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="12"
              min="1"
            />
          </div>
          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
          >
            ➕ Thêm sinh viên
          </button>
        </div>

        {/* Bảng sinh viên */}
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

export default App;
