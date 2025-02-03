import AIManager from "@/app/_component/AIManager";
import Callout from "@/app/_component/Callout";
import NextButton from "@/app/_component/NextButton";

import Image from "next/image";

export default function Movelink4() {
  return (
    <div className="flex flex-col bg-blue-50 p-4 shadow-sm">
      <AIManagerInterface>
        <div className="relative -right-20 bottom-1 flex justify-end">
          <NextButton path="/movelink/5" />
        </div>
      </AIManagerInterface>
    </div>
  );
}

const AIManagerInterface = ({ children }: { children?: React.ReactNode }) => {
  const dateOptions = [
    { id: 1, name: "날짜 선택하기", highlighted: false },
    { id: 2, name: "협의가능(선택)", highlighted: true },
  ];

  const timeOptions = [
    { id: 1, name: "오전 (07시~12시)", highlighted: false },
    { id: 2, name: "오후 (13시~18시)", highlighted: false },
    { id: 3, name: "모두가능 (07시~18시)", highlighted: true },
  ];

  const spaceOptions = [
    { id: 1, name: "방", count: 3, highlighted: true },
    { id: 2, name: "화장실", count: 1, highlighted: true },
    { id: 3, name: "베란다", count: 1, highlighted: true },
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

          {/* Date Selection */}
          <div className="mt-4">
            <p className="mb-2">청소 예정일이 언제인가요?</p>
            <div className="grid grid-cols-2 gap-2">
              {dateOptions.map((option) => (
                <button
                  key={option.id}
                  className={`rounded-lg p-2 ${
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

          {/* Time Selection */}
          <div className="mt-4">
            <p className="mb-2">희망하는 청소시간은 언제인가요?</p>
            <div className="grid grid-cols-3 gap-2">
              {timeOptions.map((option) => (
                <button
                  key={option.id}
                  className={`rounded-lg p-2 ${
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

          {/* Space Selection */}
          <div className="mt-4">
            <p className="mb-2">공간개수를 알려주세요.</p>
            <div className="grid grid-cols-3 gap-2">
              {spaceOptions.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center justify-between gap-2 rounded-lg bg-white p-2"
                >
                  <button className="rounded-full bg-blue-500 px-2 text-white">
                    -
                  </button>
                  <span>
                    {option.name} {option.count}
                  </span>
                  <button className="rounded-full bg-blue-500 px-2 text-white">
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};
