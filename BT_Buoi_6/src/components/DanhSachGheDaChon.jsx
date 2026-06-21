import { useDispatch } from 'react-redux'
import { huyGhe } from '../redux/bookingSlice'
import { formatGia } from '../utils/formatGia'

const mucChuThich = [
  { mau: 'bg-orange-500', nhan: 'Ghế đã đặt' },
  { mau: 'bg-green-500', nhan: 'Ghế đang chọn' },
  { mau: 'bg-white border border-gray-800', nhan: 'Ghế chưa đặt' },
]

export default function DanhSachGheDaChon({
  gheDangChon,
  tongTien,
  onThanhToan,
}) {
  const dispatch = useDispatch()

  return (
    <div className="w-full">
      <h2 className="mb-4 text-center text-lg font-bold text-yellow-400">
        DANH SÁCH GHẾ BẠN CHỌN
      </h2>

      <ul className="mb-6 space-y-3">
        {mucChuThich.map(({ mau, nhan }) => (
          <li key={nhan} className="flex items-center gap-3 text-white">
            <span className={`h-6 w-6 shrink-0 rounded border border-gray-600 ${mau}`} />
            <span className="text-sm">{nhan}</span>
          </li>
        ))}
      </ul>

      <div className="overflow-hidden rounded border border-gray-400 bg-white/95">
        <table className="w-full text-sm text-gray-900">
          <thead>
            <tr className="border-b border-gray-300 bg-gray-100">
              <th className="px-3 py-2 text-left font-semibold">Số ghế</th>
              <th className="px-3 py-2 text-right font-semibold">Giá</th>
              <th className="w-14 px-2 py-2 text-center font-semibold">Hủy</th>
            </tr>
          </thead>
          <tbody>
            {gheDangChon.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-3 py-6 text-center text-gray-500">
                  Chưa chọn ghế nào
                </td>
              </tr>
            ) : (
              gheDangChon.map((ghe) => (
                <tr key={ghe.soGhe} className="border-b border-gray-200">
                  <td className="px-3 py-2 font-medium">{ghe.soGhe}</td>
                  <td className="px-3 py-2 text-right">{formatGia(ghe.gia)}</td>
                  <td className="px-2 py-2 text-center">
                    <button
                      type="button"
                      onClick={() => dispatch(huyGhe(ghe.soGhe))}
                      className="inline-flex h-7 w-7 items-center justify-center rounded bg-red-600 text-sm font-bold text-white transition-colors hover:bg-red-700"
                      aria-label={`Hủy ghế ${ghe.soGhe}`}
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-right text-xl font-bold text-yellow-400">
        Tổng tiền: <span className="text-2xl">{formatGia(tongTien)}</span>
      </p>

      <button
        type="button"
        onClick={onThanhToan}
        disabled={gheDangChon.length === 0}
        className="mt-4 w-full rounded-lg bg-white px-8 py-2.5 font-semibold text-gray-900 shadow transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Thanh toán
      </button>
    </div>
  )
}
