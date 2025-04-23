import { useEffect, useState } from "react";

const LOCAL_KEY = "todo-list";

export function Cau8() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Đồng bộ với localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (!task.trim()) return;

    if (editingIndex !== null) {
      const updated = [...todos];
      updated[editingIndex].text = task.trim();
      setTodos(updated);
      setEditingIndex(null);
    } else {
      setTodos([...todos, { text: task.trim() }]);
    }

    setTask("");
  };

  const handleEdit = (index) => {
    setTask(todos[index].text);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 Danh sách công việc</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="border px-4 py-2 rounded w-full"
            placeholder="Nhập công việc..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            {editingIndex !== null ? "Lưu" : "Thêm"}
          </button>
        </div>

        <ul className="space-y-2">
          {todos.length > 0 ? (
            todos.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>{item.text}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-yellow-500 hover:underline"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:underline"
                  >
                    Xoá
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center">Không có công việc nào.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
