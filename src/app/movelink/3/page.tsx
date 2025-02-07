"use client";
import AIManager from "@/app/_component/AIManager";
import Callout from "@/app/_component/Callout";
import NavigationButton from "@/app/_component/NavigationButton";

import Image from "next/image";
import { useState } from "react";

export default function Movelink3() {
  return (
    <div className="flex flex-col bg-blue-50 p-4 shadow-sm">
      <AIManagerInterface>
        <div className="relative -right-20 bottom-1 flex justify-end">
          <NavigationButton path="/movelink/4" />
        </div>
      </AIManagerInterface>
    </div>
  );
}

const AIManagerInterface = ({ children }: { children?: React.ReactNode }) => {
  const [selectedSchedule, setSelectedSchedule] = useState<number | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<number | null>(null);
  const [selectedContract, setSelectedContract] = useState<number | null>(null);

  const scheduleOptions = [
    { id: 1, name: "1개월이내" },
    { id: 2, name: "2개월이내" },
    { id: 3, name: "3개월이내" },
    { id: 4, name: "3개월이후" },
    { id: 5, name: "상담 후 결정" },
  ];

  const budgetOptions = [
    { id: 1, name: "1천만원미만" },
    { id: 2, name: "1천만원대" },
    { id: 3, name: "2천만원대" },
    { id: 4, name: "3천만원대" },
    { id: 5, name: "4천만원대" },
    { id: 6, name: "5천만원대" },
    { id: 7, name: "5천만원 이상" },
    { id: 8, name: "상담 후 결정" },
  ];

  const contractOptions = [
    { id: 1, name: "계약" },
    { id: 2, name: "미계약" },
    { id: 3, name: "기타" },
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
              해당 내용을 빠짐 없이 입력해 주세요. [토탈인테리어]
            </p>
          </Callout>

          {/* Schedule Selection */}
          <div className="mt-4">
            <p className="mb-2">공사 예정일이 언제인가요?</p>
            <div className="grid grid-cols-5 gap-2">
              {scheduleOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedSchedule(option.id)}
                  className={`rounded-lg p-2 ${
                    selectedSchedule === option.id
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Selection */}
          <div className="mt-4">
            <p className="mb-2">인테리어 예산을 알려주세요.</p>
            <div className="grid grid-cols-4 gap-2">
              {budgetOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedBudget(option.id)}
                  className={`rounded-lg p-2 ${
                    selectedBudget === option.id
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contract Status */}
          <div className="mt-4">
            <p className="mb-2">부동산 계약상태를 알려주세요.</p>
            <div className="grid grid-cols-3 gap-2">
              {contractOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedContract(option.id)}
                  className={`rounded-lg p-2 ${
                    selectedContract === option.id
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
