import type { MetaFunction } from "@remix-run/node";
import {ChatBox} from "~/components/ChatBox";

export const meta: MetaFunction = () => {
  return [
    { title: "Mental health assist" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <ChatBox />
      </div>
    </div>
  );
}
