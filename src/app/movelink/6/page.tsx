import AIManager from "@/app/_component/AIManager";
import Callout from "@/app/_component/Callout";
import RecommendationButton from "@/app/_component/RecommendationButton";

import Image from "next/image";

export default function Movelink6() {
  return (
    <div className="flex flex-col bg-blue-50 p-4 shadow-sm">
      <AIManagerInterface>
        <div className="mt-8 flex justify-end">
          <RecommendationButton path="/movelink/request" />
        </div>
      </AIManagerInterface>
    </div>
  );
}

const AIManagerInterface = ({ children }: { children?: React.ReactNode }) => {
  const cleaningOptions = [
    { id: 1, name: "공실입니다", highlighted: true },
    {
      id: 2,
      name: "모든 집이 있는 상태에서 청소를 해야합니다(거주청소)",
      highlighted: false,
    },
    {
      id: 3,
      name: "오전에 전 세입자가 나간 후 청소를 하고, 오후에 이사짐이 들어옵니다",
      highlighted: false,
    },
    { id: 4, name: "엘리베이터가 없습니다.", highlighted: false },
    {
      id: 5,
      name: "가전제품(냉장고, 식기세척기, 오븐 등) 청소가 필요합니다",
      highlighted: false,
    },
  ];

  return (
    <div className="m-1 flex h-[80vh] w-[calc(100%-100px)] items-center justify-center">
      {/* Avatar */}
      <div className="mr-10">
        <Image
          src="/images/menWithSuit.png"
          alt="AI Manager Avatar"
          className="object-cover"
          width={200}
          height={400}
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex flex-1 flex-col gap-1 space-y-3">
          <AIManager />

          <Callout className="p-5">
            <p className="text-gray-800">
              더 정확한 업체추천 및 일정조율을 위해 몇가지 질문드리려 합니다.
              <br />
              해당 내용을 빠짐 없이 입력해 주세요. [청소]
            </p>
          </Callout>

          {/* Cleaning Status */}
          <div className="mt-4">
            <p className="my-3 font-bold">청소당일 시공환경은 어떤가요?</p>
            <div className="grid grid-cols-1 gap-2">
              {cleaningOptions.map((option) => (
                <button
                  key={option.id}
                  className={`rounded-lg p-2 text-left ${
                    option.highlighted
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};
