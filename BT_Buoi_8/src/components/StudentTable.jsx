function StudentTable({ students, onEdit, onDelete }) {
  return (
    <div className="mt-6">
      <div className="grid gap-4 md:hidden">
        {students.length > 0 ? (
          students.map((student) => (
            <article
              key={student.maSV}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Mã SV
                  </p>
                  <p className="mt-1 font-semibold text-blue-700">{student.maSV}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Họ tên
                  </p>
                  <p className="mt-1 text-gray-900">{student.hoTen}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Số điện thoại
                  </p>
                  <p className="mt-1 text-gray-900">{student.soDienThoai}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Email
                  </p>
                  <p className="mt-1 break-all text-gray-900">{student.email}</p>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => onEdit(student)}
                    className="w-full rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-yellow-500"
                  >
                    Sửa
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(student.maSV)}
                    className="w-full rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white px-4 py-10 text-center text-sm text-gray-500 shadow-sm">
            Không tìm thấy sinh viên phù hợp.
          </div>
        )}
      </div>

      <div className="hidden overflow-hidden rounded-3xl border border-gray-200 md:block">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-left">
            <thead className="bg-gray-900 text-sm uppercase tracking-[0.2em] text-gray-200">
              <tr>
                <th className="px-4 py-4">Mã SV</th>
                <th className="px-4 py-4">Họ tên</th>
                <th className="px-4 py-4">Số điện thoại</th>
                <th className="px-4 py-4">Email</th>
                <th className="px-4 py-4 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((student, index) => (
                  <tr
                    key={student.maSV}
                    className={`border-t border-gray-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-4 py-4 font-semibold text-blue-700">
                      {student.maSV}
                    </td>
                    <td className="px-4 py-4">{student.hoTen}</td>
                    <td className="px-4 py-4">{student.soDienThoai}</td>
                    <td className="px-4 py-4">{student.email}</td>
                    <td className="px-4 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => onEdit(student)}
                          className="rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-yellow-500"
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          onClick={() => onDelete(student.maSV)}
                          className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-10 text-center text-sm text-gray-500"
                  >
                    Không tìm thấy sinh viên phù hợp.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentTable;
