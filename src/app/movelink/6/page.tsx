"use client";

import AIManager from "@/app/_component/AIManager";
import Callout from "@/app/_component/Callout";
import NextButton from "@/app/_component/NextButton";

import LoadingSpinner from "@/app/_component/LoadingSpinner";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Movelink6_Processing() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col bg-blue-50 p-4 shadow-sm">
      <AIManagerInterface>
        <div className="relative -right-20 bottom-1 flex justify-end">
          <NextButton path="/movelink/7" disabled={isButtonDisabled} />
        </div>
      </AIManagerInterface>
    </div>
  );
}

const AIManagerInterface = ({ children }: { children?: React.ReactNode }) => {
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

          <Callout className="p-7">
            <div className="mb-2 flex justify-center">
              <LoadingSpinner />
            </div>
            <p className="break-word text-gray-800">
              잠시만 기다려주세요! 고객님이 입력해주신 소중한 정보를 바탕으로,
              <br />
              AI 매니저 무링이 최적의 전문가를 추천 중입니다.
            </p>
            <p className="break-word text-gray-800">
              <br />
              무링은 플랫폼 당사의 무분별한 매칭이 아닌,
              <br />
              고객님의 요청 조건에 가장 잘 맞는 서비스별 <br />
              상위 3곳의 전문가를 AI가 신중히 선별합니다.
              <br />
              이는 고객님께 객관적이고 신뢰할 수 있는 선택을 드리기 위함입니다.
            </p>
            <p className="break-word text-gray-800">
              <br />
              추천된 전문가들은 고객님의 요청을 검토한 후,
              <br />
              직접 연락을 드림으로써 보다 자세한 상담을 제공할 예정입니다.
              <br />
              무링이 연결한 전문가와 함께, 모든 과정을 믿고 <br /> 진행하실 수
              있도록 도와드리겠습니다.
            </p>
          </Callout>

          {children}
        </div>
      </div>
    </div>
  );
};
