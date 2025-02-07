"use client";

import { Box } from "@mui/material";

export default function Calendar() {
  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          mb: 3,
        }}
      >
        2025년 4월
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 1,
          mb: 2,
        }}
      >
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <Box
            key={day}
            sx={{
              textAlign: "center",
              color: day === "일" ? "red" : "inherit",
            }}
          >
            {day}
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 1,
        }}
      >
        {[
          { date: "30", color: "#ccc" },
          { date: "31", color: "#ccc" },
          { date: "1" },
          { date: "2", event: "화이트홀스 인테리어\n상담예약" },
          { date: "3" },
          { date: "4" },
          { date: "5" },
          { date: "6" },
          { date: "7" },
          { date: "8" },
          { date: "9" },
          { date: "10" },
          { date: "11" },
          { date: "12" },
          { date: "13", event: "화이트홀스 인테리어\n시공시작" },
          { date: "14" },
          { date: "15" },
          { date: "16", event: "정성성소\n상담예약" },
          { date: "17" },
          { date: "18" },
          { date: "19" },
          { date: "20" },
          { date: "21" },
          { date: "22" },
          { date: "23" },
          { date: "24" },
          { date: "25" },
          { date: "26" },
          { date: "27" },
          { date: "28" },
          { date: "29" },
          { date: "30" },
          { date: "31" },
          { date: "1", color: "#ccc" },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              height: "80px",
              p: 1,
              position: "relative",
              color: item.color || (index % 7 === 0 ? "red" : "inherit"),
            }}
          >
            <Box>{item.date}</Box>
            {item.event && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 4,
                  left: 4,
                  right: 4,
                  backgroundColor: "#60B7FF",
                  borderRadius: 1,
                  p: 0.5,
                  fontSize: "0.75rem",
                  color: "white",
                  whiteSpace: "pre-line",
                }}
              >
                {item.event}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
