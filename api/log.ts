import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Log request details
  console.log("=== Request Log 2 ===");
  console.log("Method:", request.method);
  console.log("URL:", request.url);
  console.log("Headers:", JSON.stringify(request.headers, null, 2));
  console.log("Query:", JSON.stringify(request.query, null, 2));
  console.log("Body:", JSON.stringify(request.body, null, 2));
  console.log("Timestamp:", new Date().toISOString());
  console.log("==================");

  response.status(200).json({
    success: true,
    message: "Request logged successfully",
    timestamp: new Date().toISOString(),
  });
}
