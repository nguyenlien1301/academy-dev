import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";

const webhookSecret: string = process.env.WEBHOOK_SECRET || "";

export async function POST(req: Request) {
  const svix_id = req.headers.get("svix-id") ?? "";
  const svix_timestamp = req.headers.get("svix-timestamp") ?? "";
  const svix_signature = req.headers.get("svix-signature") ?? "";
  //   nếu ko có WEBHOOK_SECRET thì bắn ra lỗi
  if (!process.env.WEBHOOK_SECRET) {
    throw new Error("WEBHOOK_SECRET is not set");
  }
  //   Đang là json
  const payload = req.json();
  //   convert nó thành stringify()
  const body = JSON.stringify(payload);
  //  nếu có WEBHOOK_SECRET thì chạy xuống đây
  const sivx = new Webhook(process.env.WEBHOOK_SECRET);

  let msg: WebhookEvent;

  try {
    msg = sivx.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    return new Response("Bad Request", { status: 400 });
  }
  //   Khi gọi lên trang web âcdemy nó sẽ trả về một eventType
  const evenType = msg.type;
  if (evenType === "user.created") {
    // create user to data
    console.log("🚀msg.data---->", msg.data);
  }
  // Rest

  return new Response("OK", { status: 200 });
}
