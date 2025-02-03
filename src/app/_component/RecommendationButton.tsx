"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
export default function RecommendationButton({
  path,
}: Readonly<{
  path: string;
}>) {
  const router = useRouter();
  return (
    <Button
      variant="outlined"
      onClick={() => router.push(path)}
      disabled={!path}
      className="rounded-xl"
    >
      추천받기
    </Button>
  );
}
