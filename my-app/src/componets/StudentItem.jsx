// src/components/StudentItem.jsx
import React from "react";

function StudentItem({ student, onDelete, onEdit }) {
  // Kiểm tra nếu student không tồn tại, trả về null hoặc thông báo lỗi
  if (!student) {
    return <div>Không có thông tin sinh viên.</div>;
  }

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">{student.name}</td>
      <td className="p-3">{student.class}</td>
      <td className="p-3">{student.age}</td>
      <td className="p-3 text-center">
        <button
          onClick={() => onEdit(student.id)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
        >
          Sửa
        </button>
        <button
          onClick={() => onDelete(student.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded ml-2"
        >
          Xoá
        </button>
      </td>
    </tr>
  );
}

export default StudentItem;
