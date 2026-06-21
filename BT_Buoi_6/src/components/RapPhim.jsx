import { useDispatch, useSelector } from 'react-redux'
import { datGhe, selectDanhSachHang } from '../redux/bookingSlice'

const classTheoTrangThai = (ghe) => {
  if (ghe.daDat) return 'bg-orange-500 border-orange-600 text-white cursor-not-allowed'
  if (ghe.dangChon) return 'bg-green-500 border-green-600 text-white cursor-pointer'
  return 'bg-white border-gray-800 text-gray-900 cursor-pointer hover:bg-gray-100'
}

export default function RapPhim() {
  const dispatch = useDispatch()
  const danhSachHang = useSelector(selectDanhSachHang)

  const handleChonGhe = (ghe) => {
    if (!ghe.daDat && ghe.gia > 0) {
      dispatch(datGhe(ghe.soGhe))
    }
  }

  return (
    <>
      <div className="mb-6 flex w-full justify-center">
        <div
          className="flex h-14 w-[85%] max-w-xl items-center justify-center bg-orange-500 text-lg font-bold uppercase tracking-wide text-black shadow-lg"
          style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)' }}
        >
          Màn hình
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        {danhSachHang.map((hang) => (
          <div
            key={hang.hang || 'header'}
            className="flex items-center gap-2"
          >
            <span className="w-5 shrink-0 text-center text-sm font-bold text-yellow-300">
              {hang.hang}
            </span>

            <div className="flex gap-2">
              {hang.danhSachGhe.map((ghe) => {
                const isHeaderSeat = !ghe.gia && ghe.soGhe.length <= 2

                if (isHeaderSeat) {
                  return (
                    <span
                      key={ghe.soGhe}
                      className="flex h-8 w-8 items-center justify-center text-xs font-semibold text-yellow-300"
                    >
                      {ghe.soGhe}
                    </span>
                  )
                }

                const soHienThi = ghe.soGhe.replace(/^[A-Z]/, '')

                return (
                  <button
                    key={ghe.soGhe}
                    type="button"
                    onClick={() => handleChonGhe(ghe)}
                    disabled={ghe.daDat}
                    title={ghe.soGhe}
                    className={`flex h-8 w-8 items-center justify-center rounded border text-[10px] font-bold transition-colors ${classTheoTrangThai(ghe)}`}
                  >
                    {soHienThi}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
