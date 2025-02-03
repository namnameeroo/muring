"use client";
import Callout from "@/app/_component/Callout";
import NextButton from "@/app/_component/NextButton";
import ReasonModal from "@/app/_component/ReasonModal";
import ReservationModal from "@/app/_component/ReservationModal";
import Image from "next/image";
import { useState } from "react";

const experts = [
  {
    id: 1,
    name: "화이트홈즈 인테리어",
    rating: 4.8,
    contracts: 68,
    description:
      "[전문건설업 면허 보유] 화이트홈즈는 1현장 1소장 1디자이너 원칙을 고수합니다.",
    image: "/images/mock/h1.jpg",
  },
  {
    id: 2,
    name: "리센느 인테리어",
    rating: 4.6,
    contracts: 97,
    description:
      "[전문건설업 면허 보유] 디자인 설계부터 시공, 마감까지 리센느가 책임지겠습니다.",
    image: "/images/mock/h2.jpg",
  },
  {
    id: 3,
    name: "크루엘디자인이앤씨",
    rating: 4.4,
    contracts: 121,
    description:
      "[전문건설업 면허 보유] 35년 직영시공 품질, 가격 합리성으로 감각 라이프스타일링 전문",
    image: "/images/mock/h3.jpg",
  },
  {
    id: 4,
    name: "정성청소",
    rating: 4.9,
    contracts: 178,
    description:
      "[위생관리사 면허 보유] 하청업체 직영으로만 운영하며 대표인 제가 직접 상담합니다.",
    image: "/images/mock/c1.jpg",
  },
  {
    id: 5,
    name: "총각클린",
    rating: 5.0,
    contracts: 97,
    description:
      "[위생관리사 면허 보유] 10년 경력! 집단화된 전문업체입니다. 3명의 아이아빠가 정소합니다.",
    image: "/images/mock/c2.jpg",
  },
  {
    id: 6,
    name: "휴앤케어",
    rating: 4.3,
    contracts: 131,
    description:
      "[방역소독업 신고증 보유] 방문후 깨끗한 제품 청소NO! 하루3집만! 제품에 맞는 분해로 청소진행!",
    image: "/images/mock/c3.jpg",
  },
];

export default function Movelink7_Recommendation() {
  const [open, setOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleReservationOpen = () => {
    setReservationOpen(true);
  };
  const handleReservationClose = () => {
    setReservationOpen(false);
  };
  return (
    <>
      <div className="flex flex-col gap-2 bg-blue-50 p-4 shadow-sm">
        <Callout className="p-5">
          <p className="text-gray-800">
            무링의 전문가 추천입니다. 해당 전문가 정보 확인 및 무링의 의견
            <br />
            확인 후 전화상담예약 버튼으로 일정을 잡아주세요.
          </p>
        </Callout>

        <div className="h-[calc(100vh-230px)] overflow-y-auto">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="mb-4 rounded-lg bg-white p-4 shadow-sm"
            >
              <div className="flex gap-4">
                <div className="h-32 w-32">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    className="h-full w-full rounded-lg object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="text-xl font-bold">{expert.name}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="text-xl">{expert.rating}</span>
                    </div>
                    <span className="text-gray-600">
                      계약건 : {expert.contracts}건
                    </span>
                  </div>
                  <p className="text-gray-700">{expert.description}</p>
                  <div className="mt-4 flex gap-2">
                    <button
                      className="rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-50"
                      onClick={handleOpen}
                    >
                      무링의 추천 근거
                    </button>
                    <button
                      className="rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-50"
                      onClick={handleReservationOpen}
                    >
                      전화 상담 예약
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative -right-20 bottom-1 flex justify-end">
          <NextButton path="/movelink/4" />
        </div>
      </div>

      <ReasonModal open={open} onClose={handleClose} />
      <ReservationModal
        open={reservationOpen}
        onClose={handleReservationClose}
      />
    </>
  );
}
