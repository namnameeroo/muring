import Image from "next/image";
import Modal from "./Modal";

export default function ReasonModal({
  open = false,
  // close,
  onClose,
}: {
  open?: boolean;
  // close?: () => void;
  onClose: () => void;
}) {
  const recommendationDetails = [
    {
      title: "고객 요청 정보 분석 결과",
      content:
        '고객님께서 요청하신 "우드톤 → 화이트톤 전환, 베란다 확장, 간접 조명 추가" 작업은 고급스러운 공간 연출과 효율적인 구조 변경을 요구하는 프로젝트입니다.',
    },
    {
      title: "화이트톤 리모델링 경험",
      content:
        "화이트홈즈 인테리어는 화이트톤을 중심으로 한 리모델링 작업을 다수 수행한 포트폴리오를 보유하고 있습니다. 최근 유사 작업: 금천 푸르지오 아파트 32평 리모델링 프로젝트\n기존 우드톤 공간을 화이트톤으로 전환하고, 간접 조명을 활용해 세련된 거실과 침실을 연출한 사례입니다.",
    },
    {
      title: "베란다 확장 전문성",
      content:
        "베란다를 확장해 다용도실로 활용한 작업 사례가 포트폴리오에 다수 등록되어 있습니다.\n확장 작업 시 단열과 방수 처리를 전문적으로 관리하며, 공간 활용도를 극대화합니다.\n사례: 성남 레미안아파트 베란다 확장 (30평 규모).",
    },
    {
      title: "간접 조명 설계 및 설치 능력",
      content: `간접 조명을 통해 공간의 아늑함을 강조한 작업 포트폴리오가 많으며, 고객
          요청에 따라 밝기 조절 가능한 조명 시스템을 설치한 경험이 있습니다.
          최근 프로젝트에서 거실 및 침실에 조명을 설치하며 고객으로부터
          "완성도 높은 조명 설계"라는 리뷰를 받았습니다.`,
    },
    {
      title: "예산 적합성",
      content:
        "고객님의 예상 예산(2,000만 원대)과 잘 부합하는 평균 견적을 제공합니다.\n과거 유사 프로젝트 평균 견적: 1,900만 원~2,100만 원.",
    },
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <div className="mb-4 flex items-center justify-between gap-6">
        <Image
          src="/images/menWithSuit.png"
          alt="AI Manager Avatar"
          className="object-cover"
          width={180}
          height={300}
        />

        <div className="flex w-[800px] flex-col gap-4 px-6">
          {recommendationDetails.map((detail) => (
            <div key={detail.title}>
              <h3 className="text-lg font-bold text-gray-800">
                {detail.title}
              </h3>
              <p className="text-sm break-words">{detail.content}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
