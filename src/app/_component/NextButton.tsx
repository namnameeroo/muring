"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
export default function NextButton({
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
      다음
    </Button>
  );
}
