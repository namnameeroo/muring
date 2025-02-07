"use client";
import AIManager from "@/app/_component/AIManager";
import Callout from "@/app/_component/Callout";
import NavigationButton from "@/app/_component/NavigationButton";
import BasicDatePicker from "@/app/_component/CalendarPicker";

import Image from "next/image";
import { useState } from "react";

export default function Movelink5() {
  return (
    <div className="flex flex-col bg-blue-50 p-4 shadow-sm">
      <AIManagerInterface>
        <div className="relative -right-20 bottom-1 flex justify-end">
          <NavigationButton path="/movelink/6" />
        </div>
      </AIManagerInterface>
    </div>
  );
}

const AIManagerInterface = ({ children }: { children?: React.ReactNode }) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(2);
  const [selectedTime, setSelectedTime] = useState<number | null>(3);
  const [spaces, setSpaces] = useState([
    { id: 1, name: "방", count: 3, highlighted: true },
    { id: 2, name: "화장실", count: 1, highlighted: true },
    { id: 3, name: "베란다", count: 1, highlighted: true },
  ]);
  // const [showCalendar, setShowCalendar] = useState(false);

  const handleCount = (id: number, increment: boolean) => {
    setSpaces(
      spaces.map((space) => {
        if (space.id === id) {
          return {
            ...space,
            count: increment ? space.count + 1 : Math.max(0, space.count - 1),
          };
        }
        return space;
      }),
    );
  };

  // const dateOptions = [
  //   { id: 1, name: "날짜 선택하기", highlighted: false },
  //   { id: 2, name: "협의가능(선택)", highlighted: true },
  // ];

  const timeOptions = [
    { id: 1, name: "오전 (07시~12시)", highlighted: false },
    { id: 2, name: "오후 (13시~18시)", highlighted: false },
    { id: 3, name: "모두가능 (07시~18시)", highlighted: true },
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
            <div className="flex gap-2">
              <div className="grid grid-cols-2 grid-rows-2 gap-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedDate(1);
                    }}
                    className={`rounded-lg p-2 transition-colors ${
                      selectedDate === 1
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-800 hover:bg-blue-100"
                    }`}
                  >
                    날짜 선택하기
                  </button>
                  {selectedDate === 1 && <BasicDatePicker />}
                </div>
                <button
                  onClick={() => {
                    setSelectedDate(2);
                  }}
                  className={`rounded-lg p-2 transition-colors ${
                    selectedDate === 2
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800 hover:bg-blue-100"
                  }`}
                >
                  협의가능 (선택)
                </button>
              </div>

              {/* {showCalendar && selectedDate === 1 && (
                <div className="w-full rounded-lg p-4 shadow-lg">
                  
                </div>
              )} */}
            </div>
          </div>

          {/* Time Selection */}
          <div className="mt-4">
            <p className="mb-2">희망하는 청소시간은 언제인가요?</p>
            <div className="grid grid-cols-3 gap-2">
              {timeOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedTime(option.id)}
                  className={`rounded-lg p-2 transition-colors ${
                    selectedTime === option.id
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800 hover:bg-blue-100"
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
              {spaces.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center justify-between gap-2 rounded-lg bg-white p-2"
                >
                  <button
                    onClick={() => handleCount(option.id, false)}
                    className="rounded-full bg-blue-500 px-2 text-white transition-colors hover:bg-blue-600"
                  >
                    -
                  </button>
                  <span>
                    {option.name} {option.count}
                  </span>
                  <button
                    onClick={() => handleCount(option.id, true)}
                    className="rounded-full bg-blue-500 px-2 text-white transition-colors hover:bg-blue-600"
                  >
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
