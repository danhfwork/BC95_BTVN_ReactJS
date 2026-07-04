function StudentField({
  id,
  label,
  value,
  error,
  placeholder,
  disabled = false,
  onChange,
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-700" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${
          error ? "border-red-400 ring-4 ring-red-100" : "border-gray-300"
        } ${disabled ? "cursor-not-allowed bg-gray-100 text-gray-500" : ""}`}
      />
      <p className="mt-2 min-h-6 text-sm text-red-500">{error || ""}</p>
    </div>
  );
}

function StudentForm({
  formData,
  errors,
  isEditing,
  onChange,
  onSubmit,
  onReset,
}) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-md">
      <div className="border-b border-gray-200 bg-gray-900 px-4 py-4 text-white sm:px-6 sm:py-5">
        <p className="text-xs uppercase tracking-[0.25em] text-blue-300 sm:text-sm sm:tracking-[0.35em]">
          React Form Validation
        </p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
          Thông tin sinh viên
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-300">
          Quản lý danh sách sinh viên với Redux Toolkit, validate dữ liệu và tìm
          kiếm trực tiếp trên bảng.
        </p>
      </div>

      <form className="p-4 sm:p-6" onSubmit={onSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <StudentField
            id="maSV"
            label="Mã sinh viên"
            value={formData.maSV}
            error={errors.maSV}
            placeholder="Ví dụ: SV004"
            disabled={isEditing}
            onChange={onChange}
          />
          <StudentField
            id="hoTen"
            label="Họ tên"
            value={formData.hoTen}
            error={errors.hoTen}
            placeholder="Nhập họ và tên"
            onChange={onChange}
          />
          <StudentField
            id="soDienThoai"
            label="Số điện thoại"
            value={formData.soDienThoai}
            error={errors.soDienThoai}
            placeholder="Nhập số điện thoại"
            onChange={onChange}
          />
          <StudentField
            id="email"
            label="Email"
            value={formData.email}
            error={errors.email}
            placeholder="Nhập email"
            onChange={onChange}
          />
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="submit"
            className="w-full rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            {isEditing ? "Cập nhật sinh viên" : "Thêm sinh viên"}
          </button>

          <button
            type="button"
            onClick={onReset}
            className="w-full rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-100 sm:w-auto"
          >
            Làm mới
          </button>
        </div>
      </form>
    </section>
  );
}

export default StudentForm;
