import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");

  return (
    <h1>This is my homepage!</h1>
  );

}
