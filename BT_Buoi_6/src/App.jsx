import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RapPhim from './components/RapPhim'
import DanhSachGheDaChon from './components/DanhSachGheDaChon'
import PopupThanhCong from './components/PopupThanhCong'
import {
  selectGheDangChon,
  selectTongTien,
  xacNhanDatGhe,
} from './redux/bookingSlice'

function App() {
  const dispatch = useDispatch()
  const gheDangChon = useSelector(selectGheDangChon)
  const tongTien = useSelector(selectTongTien)
  const [thongTinThanhCong, setThongTinThanhCong] = useState(null)

  const handleThanhToan = () => {
    if (gheDangChon.length === 0) return

    setThongTinThanhCong({
      danhSachGhe: [...gheDangChon],
      tongTien,
    })
    dispatch(xacNhanDatGhe())
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/bgmovie.jpg')" }}
    >
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-center text-2xl font-bold tracking-wide text-yellow-400 md:text-3xl">
          ĐẶT VÉ XEM PHIM CYBERLEARN.VN
        </h1>

        <div className="flex flex-col gap-8 lg:flex-row">
          <section className="flex-1 rounded-lg bg-black/20 p-6 backdrop-blur-md lg:flex-[2]">
            <RapPhim />
          </section>

          <aside className="w-full rounded-lg bg-black/20 p-6 backdrop-blur-md lg:max-w-sm lg:flex-1">
            <DanhSachGheDaChon
              gheDangChon={gheDangChon}
              tongTien={tongTien}
              onThanhToan={handleThanhToan}
            />
          </aside>
        </div>
      </div>

      <PopupThanhCong
        thongTin={thongTinThanhCong}
        onClose={() => setThongTinThanhCong(null)}
      />
    </div>
  )
}

export default App
