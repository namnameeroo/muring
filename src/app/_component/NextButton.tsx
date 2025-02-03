"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
export default function NextButton({
  path,
  disabled = false,
}: Readonly<{
  path: string;
  disabled?: boolean;
}>) {
  const router = useRouter();
  return (
    <Button
      variant="outlined"
      onClick={() => router.push(path)}
      disabled={!path || disabled}
      className="rounded-xl"
    >
      다음
    </Button>
  );
}
