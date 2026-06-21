import { createSlice } from '@reduxjs/toolkit'
import danhSachGheBanDau from '../components/danhSachGhe.json'

const initialState = danhSachGheBanDau.map((hang) => ({
  ...hang,
  danhSachGhe: hang.danhSachGhe.map((ghe) => ({
    ...ghe,
    dangChon: false,
  })),
}))

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    datGhe: (state, action) => {
      const soGhe = action.payload

      state.forEach((hang) => {
        hang.danhSachGhe.forEach((ghe) => {
          if (ghe.soGhe === soGhe && !ghe.daDat && ghe.gia > 0) {
            ghe.dangChon = !ghe.dangChon
          }
        })
      })
    },

    huyGhe: (state, action) => {
      const soGhe = action.payload

      state.forEach((hang) => {
        hang.danhSachGhe.forEach((ghe) => {
          if (ghe.soGhe === soGhe) {
            ghe.dangChon = false
          }
        })
      })
    },

    xacNhanDatGhe: (state) => {
      state.forEach((hang) => {
        hang.danhSachGhe.forEach((ghe) => {
          if (ghe.dangChon) {
            ghe.daDat = true
            ghe.dangChon = false
          }
        })
      })
    },
  },
})

export const { datGhe, huyGhe, xacNhanDatGhe } = bookingSlice.actions

export const selectDanhSachHang = (state) => state.booking

export const selectGheDangChon = (state) =>
  state.booking.flatMap((hang) =>
    hang.danhSachGhe.filter((ghe) => ghe.dangChon && ghe.gia > 0),
  )

export const selectTongTien = (state) =>
  selectGheDangChon(state).reduce((tong, ghe) => tong + ghe.gia, 0)

export default bookingSlice.reducer
