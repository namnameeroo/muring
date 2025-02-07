"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { Stack } from "@mui/material";

export default function NavigationButton({
  path,
  prev = true,
  disabled = false,
}: Readonly<{
  path: string;
  prev?: boolean;
  disabled?: boolean;
}>) {
  const router = useRouter();
  return (
    <Stack direction="row" spacing={2} className="mt-5">
      {prev && (
        <Button
          variant="outlined"
          // onClick={() => router.push(prev)}
          disabled={disabled}
          className="rounded-xl"
        >
          이전
        </Button>
      )}
      <Button
        variant="outlined"
        onClick={() => router.push(path)}
        disabled={!path || disabled}
        className="rounded-xl"
      >
        다음
      </Button>
    </Stack>
  );
}
