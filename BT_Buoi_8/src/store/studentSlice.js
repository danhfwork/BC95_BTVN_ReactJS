import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      maSV: "SV001",
      hoTen: "Nguyễn Minh Anh",
      soDienThoai: "0901234567",
      email: "minhanh@example.com",
    },
    {
      maSV: "SV002",
      hoTen: "Trần Gia Bảo",
      soDienThoai: "0912345678",
      email: "giabao@example.com",
    },
    {
      maSV: "SV003",
      hoTen: "Lê Thu Hà",
      soDienThoai: "0987654321",
      email: "thuha@example.com",
    },
  ],
  selectedStudent: null,
  searchKeyword: "",
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      const maSV = action.payload;
      state.students = state.students.filter(
        (student) => student.maSV !== maSV,
      );

      if (state.selectedStudent?.maSV === maSV) {
        state.selectedStudent = null;
      }
    },
    selectStudent: (state, action) => {
      state.selectedStudent = action.payload;
    },
    updateStudent: (state, action) => {
      const nextStudent = action.payload;
      const index = state.students.findIndex(
        (student) => student.maSV === nextStudent.maSV,
      );

      if (index !== -1) {
        state.students[index] = nextStudent;
      }

      state.selectedStudent = null;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
    clearSelectedStudent: (state) => {
      state.selectedStudent = null;
    },
  },
});

export const {
  addStudent,
  deleteStudent,
  selectStudent,
  updateStudent,
  setSearchKeyword,
  clearSelectedStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
