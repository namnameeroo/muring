import Modal from "./Modal";

export default function ReservationModal({
  open = false,
  onClose,
}: {
  open?: boolean;
  onClose: () => void;
}) {
  const timeSlots = [
    { id: 1, label: "오전 (09시~12시)" },
    { id: 2, label: "오후 (13시~18시)" },
    { id: 3, label: "모두가능 (09시~18시)" },
  ];

  const agreements = [
    "개인정보 수집 및 이용에 동의",
    "개인정보 제3자 제공에 동의",
    "정보 및 마케팅 수신에 동의",
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <div className="w-full max-w-2xl p-6">
        <h2 className="mb-6 text-xl font-bold">
          상담 가능시간을 골라주세요. (부재 시 문자 남겨드립니다)
        </h2>

        <div className="mb-8 flex gap-4">
          {timeSlots.map((slot) => (
            <button
              key={slot.id}
              className={`rounded-full border px-6 py-3 hover:bg-blue-50 ${slot.id === 3 ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}
            >
              {slot.label}
            </button>
          ))}
        </div>

        <p className="mb-4">
          회원가입 하신 번호로 전문가가 직접 전화 상담 드리겠습니다.
          <br />
          혹시 다른 분이 연락 받기 원하신다면 존함과 전화번호를 입력해주세요.
        </p>

        <div className="mb-8 flex gap-4">
          <input
            type="text"
            placeholder="전화번호"
            className="flex-1 rounded border p-2"
          />
          <input
            type="text"
            placeholder="존함"
            className="w-32 rounded border p-2"
          />
        </div>

        <div className="mb-8 space-y-2">
          {agreements.map((agreement, index) => (
            <div key={index} className="flex items-center gap-2">
              <input type="checkbox" id={`agreement-${index}`} />
              <label htmlFor={`agreement-${index}`} className="text-sm">
                {`{필수} ${agreement}`}
              </label>
            </div>
          ))}
        </div>

        <button className="w-full rounded-lg bg-blue-500 py-3 text-white hover:bg-blue-600">
          상담확정
        </button>
      </div>
    </Modal>
  );
}
