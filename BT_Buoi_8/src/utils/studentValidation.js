export function validateStudent(formData, students, isEditing) {
  const errors = {};

  if (!formData.maSV.trim()) {
    errors.maSV = "Mã sinh viên không được để trống";
  } else if (!/^[a-zA-Z0-9]+$/.test(formData.maSV.trim())) {
    errors.maSV = "Mã sinh viên chỉ được chứa chữ và số";
  } else if (
    !isEditing &&
    students.some((student) => student.maSV === formData.maSV.trim())
  ) {
    errors.maSV = "Mã sinh viên đã tồn tại";
  }

  if (!formData.hoTen.trim()) {
    errors.hoTen = "Họ tên không được để trống";
  } else if (formData.hoTen.trim().length < 2) {
    errors.hoTen = "Họ tên phải có ít nhất 2 ký tự";
  } else if (
    !/^[a-zA-ZÀ-ỹ\s]+$/u.test(formData.hoTen.trim().replace(/\s+/g, " "))
  ) {
    errors.hoTen = "Họ tên không hợp lệ";
  }

  if (!formData.soDienThoai.trim()) {
    errors.soDienThoai = "Số điện thoại không được để trống";
  } else if (!/^\d+$/.test(formData.soDienThoai.trim())) {
    errors.soDienThoai = "Số điện thoại chỉ được chứa số";
  } else if (!/^\d{10,11}$/.test(formData.soDienThoai.trim())) {
    errors.soDienThoai = "Số điện thoại phải từ 10 đến 11 số";
  }

  if (!formData.email.trim()) {
    errors.email = "Email không được để trống";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = "Email không đúng định dạng";
  }

  return errors;
}
