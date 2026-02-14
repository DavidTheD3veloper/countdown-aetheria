export const runtime = 'edge';

const START_TIME = new Date("2026-02-14T09:10:02Z");

const END_TIME = new Date(
  START_TIME.getFullYear() + 2,
  START_TIME.getMonth() + 2,
  START_TIME.getDate() + 5,
  START_TIME.getHours() + 6,
  START_TIME.getMinutes() + 3,
  START_TIME.getSeconds() + 30
);

export async function GET() {
  return Response.json({
    endTime: END_TIME.toISOString()
  });
}






