"use server"
import getTodos from "@/actions/get-todos";
import { Button } from "@/components/ui/button";

export default async  function Home() {
  const todos = await getTodos({search:""})
  console.log({todos})
  return (
    <Button >hello world</Button>
  );
}
