import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentForm from "./components/StudentForm";
import StudentSearch from "./components/StudentSearch";
import StudentTable from "./components/StudentTable";
import {
  addStudent,
  clearSelectedStudent,
  deleteStudent,
  selectStudent,
  setSearchKeyword,
  updateStudent,
} from "./store/studentSlice";
import { validateStudent } from "./utils/studentValidation";

const EMPTY_FORM = {
  maSV: "",
  hoTen: "",
  soDienThoai: "",
  email: "",
};

function App() {
  const dispatch = useDispatch();
  const { students, selectedStudent, searchKeyword } = useSelector(
    (state) => state.student,
  );
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const isEditing = Boolean(selectedStudent);

  useEffect(() => {
    if (selectedStudent) {
      setFormData(selectedStudent);
      setErrors({});
      return;
    }

    setFormData(EMPTY_FORM);
    setErrors({});
  }, [selectedStudent]);

  const filteredStudents = students.filter((student) => {
    const keyword = searchKeyword.trim().toLowerCase();

    if (!keyword) {
      return true;
    }

    return [
      student.maSV,
      student.hoTen,
      student.soDienThoai,
      student.email,
    ].some((value) => value.toLowerCase().includes(keyword));
  });

  const resetForm = () => {
    setFormData(EMPTY_FORM);
    setErrors({});
    dispatch(clearSelectedStudent());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedStudent = {
      maSV: formData.maSV.trim(),
      hoTen: formData.hoTen.trim().replace(/\s+/g, " "),
      soDienThoai: formData.soDienThoai.trim(),
      email: formData.email.trim(),
    };
    const nextErrors = validateStudent(normalizedStudent, students, isEditing);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    if (isEditing) {
      dispatch(updateStudent(normalizedStudent));
    } else {
      dispatch(addStudent(normalizedStudent));
    }

    setFormData(EMPTY_FORM);
    setErrors({});
  };

  const handleDelete = (maSV) => {
    const isConfirmed = window.confirm(
      `Bạn có chắc muốn xóa sinh viên ${maSV}?`,
    );

    if (!isConfirmed) {
      return;
    }

    dispatch(deleteStudent(maSV));
  };

  return (
    <main className="min-h-screen bg-gray-100 px-3 py-6 text-gray-900 sm:px-4 sm:py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <StudentForm
          formData={formData}
          errors={errors}
          isEditing={isEditing}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onReset={resetForm}
        />

        <section className="rounded-3xl border border-gray-200 bg-white p-4 shadow-md sm:rounded-[28px] sm:p-6">
          <StudentSearch
            searchKeyword={searchKeyword}
            onSearchChange={(event) =>
              dispatch(setSearchKeyword(event.target.value))
            }
          />
          <StudentTable
            students={filteredStudents}
            onEdit={(student) => dispatch(selectStudent(student))}
            onDelete={handleDelete}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
