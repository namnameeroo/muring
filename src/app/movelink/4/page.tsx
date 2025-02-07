import AIManager from "@/app/_component/AIManager";
import Callout from "@/app/_component/Callout";
import NavigationButton from "@/app/_component/NavigationButton";

import Image from "next/image";

export default function Movelink4() {
  return (
    <div className="flex flex-col bg-blue-50 p-4 shadow-sm">
      <AIManagerInterface>
        <div className="relative -right-20 bottom-1 flex justify-end">
          <NavigationButton path="/movelink/5" />
        </div>
      </AIManagerInterface>
    </div>
  );
}

const AIManagerInterface = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="m-1 flex h-[80vh] w-[calc(100%-100px)] items-center justify-center">
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
        <div className="flex flex-1 flex-col gap-4 space-y-3">
          <AIManager />

          <Callout className="p-5">
            <p className="text-gray-800">
              더 정확한 업체추천 및 일정조율을 위해 몇가지 질문드리려 합니다.
              <br />
              해당 내용을 빠짐 없이 입력해 주세요. [토탈인테리어]
            </p>
          </Callout>

          <textarea
            className="h-52 w-full rounded-lg border border-gray-300 p-4 text-sm text-gray-700 focus:border-blue-500 focus:outline-none"
            placeholder={`예시)
  1. 기존 우드톤에서 화이트톤으로 컨셉을 잡고싶어요.
  2. 전체적으로 은은한 간접 조명을 추가해 아늑한 느낌을 내고 싶어요
  3. 스칸디나비아 스타일을 선호합니다.
  4. 베란다를 확장해 다용도실로 사용하고 싶습니다.
  5. 주방 상판은 대리석 느낌의 소재로, 싱크대는 무광 화이트로 하고 싶어요.
  6. 아이 방은 밝고 생동감 있는 느낌으로 꾸며 주세요.
  7. 애완동물을 위한 작은 공간(펫룸)을 만들어 주세요.`}
          />

          {children}
        </div>
      </div>
    </div>
  );
};
