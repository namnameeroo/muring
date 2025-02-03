import { Jua } from "next/font/google";
import Image from "next/image";
const jua = Jua({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jua",
});

const AIManager = () => {
  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-400">
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
      <span className={`${jua.className} text-gray-600`}>AI 매니저 무링</span>
    </div>
  );
};

export default AIManager;
