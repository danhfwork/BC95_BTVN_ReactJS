import { formatGia } from '../utils/formatGia'

export default function PopupThanhCong({ thongTin, onClose }) {
  if (!thongTin) return null

  const { danhSachGhe, tongTien } = thongTin

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Đóng"
      />
      <div className="relative z-10 w-full max-w-md rounded-xl bg-gray-900 p-6 text-center shadow-2xl ring-1 ring-green-500/40">
        <div className="mb-3 text-4xl">✓</div>
        <h2 className="mb-2 text-xl font-bold text-green-400">
          Thanh toán thành công!
        </h2>
        <div className="space-y-1 text-left text-sm text-gray-300">
          <p>
            <span className="text-yellow-300">Số ghế:</span> {danhSachGhe.length}
          </p>
          <p>
            <span className="text-yellow-300">Ghế:</span>{' '}
            {danhSachGhe.map((g) => g.soGhe).join(', ')}
          </p>
          <p>
            <span className="text-yellow-300">Tổng tiền:</span>{' '}
            <strong className="text-green-400">{formatGia(tongTien)}</strong>
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-white py-2.5 font-semibold text-gray-900 hover:bg-gray-100"
        >
          Đóng
        </button>
      </div>
    </div>
  )
}
