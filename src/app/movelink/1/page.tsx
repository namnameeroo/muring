import Callout from "@/app/_component/Callout";
import NextButton from "@/app/_component/NextButton";

import Image from "next/image";
export default function Movelink1() {
  return (
    <div className="flex flex-col">
      <h1>무링</h1>
      <AIManagerInterface />
      <div className="flex justify-end">
        <NextButton path="/movelink/2" />
      </div>
    </div>
  );
}

const AIManagerInterface = () => {
  const services = [
    { id: 1, name: "토탈인테리어", highlighted: true },
    { id: 2, name: "주방설비", highlighted: false },
    { id: 3, name: "부분설비", highlighted: false },
    { id: 4, name: "주거 / 상업 보험", highlighted: false },
    { id: 5, name: "이사", highlighted: false },
    { id: 6, name: "대출상담사", highlighted: false },
    { id: 7, name: "청소", highlighted: true },
    { id: 8, name: "공인중개사", highlighted: false },
  ];

  return (
    <div className="bg-gray-50 p-4">
      <div className="m-auto w-[calc(100%-100px)]">
        {/* Header */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-200">
            <span className="text-sm text-white">
              <Image
                src="/images/bot.png"
                alt="AI Manager icon"
                className="h-full w-full object-cover"
                width={24}
                height={24}
              />
            </span>
          </div>
          <span className="text-gray-600">AI 매니저 무링</span>
        </div>

        {/* Main Content Container */}
        <div className="flex gap-6">
          {/* Avatar */}

          <div className="w-1/5 rounded-lg bg-white shadow-sm">
            <Image
              src="/images/menWithSuit.png"
              alt="AI Manager Avatar"
              // className="object-cover"
              width={200}
              height={400}
            />
          </div>

          {/* Message and Buttons */}
          <div className="flex flex-1 flex-col space-y-4">
            {/* Message Bubble */}
            <Callout>
              <p className="m-10 text-gray-800">
                안녕하세요. 고객님의 새 출발을 혁신적으로 도와드릴 AI 매니저
                무링입니다. 고객님의 주거이사 및 상담을 시작 하실 때 필요한 모든
                서비스를 한번에 도와드리기 위해 제가 직접 담당하여 몇가지
                사전작업을 함께하겠습니다.
              </p>
              <p className="text-gray-800">
                필요하신 서비스를 전부 클릭 하신 후 다음 버튼을 눌러주세요.
              </p>
            </Callout>

            {/* Service Grid */}
            <div className="grid grid-cols-4 gap-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`rounded-lg p-2 text-sm ${
                    service.highlighted
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
