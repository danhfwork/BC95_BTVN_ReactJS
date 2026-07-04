function StudentSearch({ searchKeyword, onSearchChange }) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Danh sách sinh viên
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-500">
          Tìm kiếm theo mã sinh viên, họ tên, số điện thoại hoặc email.
        </p>
      </div>

      <div className="w-full lg:max-w-sm">
        <input
          type="text"
          value={searchKeyword}
          onChange={onSearchChange}
          className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="Nhập từ khóa tìm kiếm"
        />
      </div>
    </div>
  );
}

export default StudentSearch;
