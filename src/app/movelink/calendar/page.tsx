"use client";

import BasicDateCalendar from "@/app/_component/Calendar";

export default function Movelink9_Calendar() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <BasicDateCalendar />
        </div>
      </div>
    </div>
  );
}

const Sidebar = () => {
  const menuItems = [
    { title: "일정 관리", href: "/movelink/calendar" },
    { title: "동목 리뷰", href: "/movelink/review" },
    { title: "포인트", href: "/movelink/point" },
    {
      title: "고객센터",
      subItems: [
        { title: "고객센터", href: "/movelink/cs" },
        { title: "1:1문의", href: "/movelink/inquiry" },
        { title: "FAQ", href: "/movelink/faq" },
        { title: "무빙 이용가이드", href: "/movelink/guide" },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-64 border-r border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold">김민규님</h2>
        <p className="text-gray-600">나의 캘린더</p>
      </div>

      <nav>
        {menuItems.map((item, index) => (
          <div key={index} className="mb-4">
            {item.subItems ? (
              <>
                <div className="mb-2 font-medium">{item.title}</div>
                <div className="pl-4">
                  {item.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block py-2 text-gray-600 hover:text-blue-500"
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <a
                href={item.href}
                className="block py-2 font-medium hover:text-blue-500"
              >
                {item.title}
              </a>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};
