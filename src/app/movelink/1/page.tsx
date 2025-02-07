"use client";

import { useState } from "react";
import AIManager from "@/app/_component/AIManager";
import Callout from "@/app/_component/Callout";
import NavigationButton from "@/app/_component/NavigationButton";

import Image from "next/image";

export default function Movelink1() {
  return (
    <div className="flex flex-col bg-blue-50 p-4 shadow-sm">
      <AIManagerInterface>
        <div className="relative -right-20 bottom-1 flex justify-end">
          <NavigationButton path="/movelink/2" prev={false} />
        </div>
      </AIManagerInterface>
    </div>
  );
}

const AIManagerInterface = ({ children }: { children?: React.ReactNode }) => {
  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  const services = [
    { id: 1, name: "토탈인테리어", highlighted: false },
    { id: 2, name: "주방설비", highlighted: false },
    { id: 3, name: "부분설비", highlighted: false },
    { id: 4, name: "주거 / 상업 보험", highlighted: false },
    { id: 5, name: "이사", highlighted: false },
    { id: 6, name: "대출상담사", highlighted: false },
    { id: 7, name: "청소", highlighted: false },
    { id: 8, name: "공인중개사", highlighted: false },
  ];

  const toggleService = (serviceId: number) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId],
    );
  };

  return (
    <div className="m-1 flex h-[80vh] w-[calc(100%-100px)] items-center justify-center">
      {/* Main Content Container */}

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
        {/* Message and Buttons */}
        <div className="flex flex-1 flex-col gap-1 space-y-3">
          {/* Header */}
          <AIManager />

          {/* Message Bubble */}

          <Callout className="p-10">
            <p className="text-gray-800">
              안녕하세요. 고객님의 새 출발을 혁신적으로 도와드릴 <br />
              AI 매니저 무링입니다. 고객님의 주거이사 및 상담을 시작 하실 때
              <br />
              필요한 모든 서비스를 한번에 도와드리기 위해 제가 직접 담당하여
              <br />
              몇가지 사전작업을 함께하겠습니다.
            </p>
            <p className="text-gray-800">
              <br />
              필요하신 서비스를 전부 클릭 하신 후 다음 버튼을 눌러주세요.
            </p>
          </Callout>

          {/* Service Grid */}
          <div className="my-5 grid grid-cols-4 gap-2">
            {services.map((service) => (
              <button
                key={service.id}
                className={`rounded-lg p-2 text-sm ${
                  selectedServices.includes(service.id) || service.highlighted
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
                onClick={() => toggleService(service.id)}
              >
                {service.name}
              </button>
            ))}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
