import { FooterRepresentativeInfo, FooterBusinessInfo } from "@/static/utils";

export const Footer = () => {
  return (
    <footer className="font-pretendard w-full bg-gray-50 px-4 py-8 text-sm text-gray-600">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-4 flex gap-8">
          <a href="#" className="hover:text-gray-900">
            복비킹 파트너스
          </a>
          <a href="#" className="hover:text-gray-900">
            이용약관
          </a>
          <a href="#" className="hover:text-gray-900">
            개인정보처리방침
          </a>
        </nav>

        <div className="space-y-2">
          <p className="leading-relaxed">{FooterRepresentativeInfo}</p>

          <p className="leading-relaxed">{FooterBusinessInfo}</p>

          <p className="leading-relaxed">
            본 사이트에 게시된 이메일 주소가 자동 수집되는 것을 거부합니다.
          </p>

          <p className="leading-relaxed">
            복비킹은 통신판매중개자로서 건축 공사 및 중개/상담 서비스의 주 거래
            당사자가 아니며, 전문가가 제공한 견적 및 시공/서비스에 대해 일체
            책임을 지지 않습니다.
          </p>

          <p className="mt-4 text-gray-500">
            Copyright © 2024 복비킹 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
