"use client";
import AIManager from "@/app/_component/AIManager";
import Callout from "@/app/_component/Callout";
import NavigationButton from "@/app/_component/NavigationButton";

import Image from "next/image";
import { useState } from "react";

export default function Movelink2() {
  return (
    <div className="flex flex-col bg-blue-50 p-4 shadow-sm">
      <AIManagerInterface>
        <div className="relative -right-20 bottom-1 flex justify-end">
          <NavigationButton path="/movelink/3" />
        </div>
      </AIManagerInterface>
    </div>
  );
}

const AIManagerInterface = ({ children }: { children?: React.ReactNode }) => {
  const [selectedPropertyType, setSelectedPropertyType] = useState<
    number | null
  >(null);
  const [selectedBuildingType, setSelectedBuildingType] = useState<
    number | null
  >(null);
  const [address, setAddress] = useState<string>("");
  const [detailAddress, setDetailAddress] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");

  const propertyTypes = [
    { id: 1, name: "주거" },
    { id: 2, name: "상업" },
  ];

  const buildingTypes = [
    { id: 1, name: "아파트" },
    { id: 2, name: "빌라" },
    { id: 3, name: "주택" },
    { id: 4, name: "오피스텔" },
  ];

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: (data: {
        zonecode: string;
        address: string;
        addressType: string;
        userSelectedType: string;
      }) => {
        setPostcode(data.zonecode);
        setAddress(data.address);
      },
    }).open();
  };

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
              해당 내용을 빠짐 없이 입력해 주세요. [공통질문]
            </p>
          </Callout>

          {/* Property Type Selection */}
          <div className="mt-4">
            <p className="mb-2">주거공간인가요 상업공간인가요?</p>
            <div className="grid grid-cols-2 gap-2">
              {propertyTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedPropertyType(type.id)}
                  className={`rounded-lg p-2 ${
                    selectedPropertyType === type.id
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>

          {/* Building Type Selection */}
          <div className="mt-4">
            <p className="mb-2">해당 공간의 부동산 형태를 알려주세요.</p>
            <div className="grid grid-cols-4 gap-2">
              {buildingTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedBuildingType(type.id)}
                  className={`rounded-lg p-2 ${
                    selectedBuildingType === type.id
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>

          {/* Address Input Fields */}
          <div className="mt-4">
            <p className="mb-2">해당 공간의 주소를 입력해 주세요.</p>
            <div className="flex gap-2">
              <input
                className="w-32 rounded-lg border p-2"
                placeholder="우편번호"
                value={postcode}
                readOnly
              />
              <button
                className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                onClick={handleAddressSearch}
              >
                주소검색
              </button>
            </div>
            <div className="mt-2 flex gap-2">
              <input
                className="w-full rounded-lg border p-2"
                placeholder="주소"
                value={address}
                readOnly
              />
              <input
                className="w-full rounded-lg border p-2"
                placeholder="상세주소"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
              />
            </div>
          </div>

          {/* Area Input Fields */}
          <div className="mt-4">
            <p className="mb-2">해당 공간의 평수와 층수를 입력해주세요.</p>
            <div className="flex gap-2">
              <input
                className="w-1/2 rounded-lg border p-2"
                placeholder="평수"
              />
              <input
                className="w-1/2 rounded-lg border p-2"
                placeholder="층수"
              />
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};
