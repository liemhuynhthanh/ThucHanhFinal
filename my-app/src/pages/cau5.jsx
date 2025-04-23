import { useState } from "react";

const initialStudents = [
  { id: 1, name: "Nguyễn Văn A", class: "6A", age: 12 },
  { id: 2, name: "Trần Thị B", class: "6B", age: 13 },
];

function Cau5() {
  const [students, setStudents] = useState(initialStudents);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: "", class: "", age: "" });

  const startEdit = (student) => {
    setEditingId(student.id);
    setFormData({ name: student.name, class: student.class, age: student.age });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ name: "", class: "", age: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = (id) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, ...formData, age: parseInt(formData.age) } : s
      )
    );
    cancelEdit();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">🛠 Sửa thông tin sinh viên</h1>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Tên</th>
              <th className="p-3 text-left">Lớp</th>
              <th className="p-3 text-left">Tuổi</th>
              <th className="p-3 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                {editingId === student.id ? (
                  <>
                    <td className="p-2">
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                      />
                    </td>
                    <td className="p-2 text-center space-x-2">
                      <button
                        onClick={() => saveEdit(student.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        Lưu
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="bg-gray-400 text-white px-3 py-1 rounded"
                      >
                        Hủy
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-3">{student.name}</td>
                    <td className="p-3">{student.class}</td>
                    <td className="p-3">{student.age}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => startEdit(student)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Sửa
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cau5;
