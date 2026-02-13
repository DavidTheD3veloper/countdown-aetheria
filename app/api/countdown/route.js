const START_TIME = new Date("2026-02-13T20:42:00Z");

const END_TIME = new Date(
  START_TIME.getFullYear() + 2,
  START_TIME.getMonth() + 3,
  START_TIME.getDate() + 12,
  START_TIME.getHours() + 5,
  START_TIME.getMinutes() + 3,
  START_TIME.getSeconds() + 30
);

export async function GET() {
  return Response.json({
    endTime: END_TIME.toISOString()
  });
}


