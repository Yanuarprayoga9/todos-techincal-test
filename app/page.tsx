import { Button } from "@/components/ui/button";
import { prismadb } from "@/lib/db";

export default async function Home() {
  const user = await prismadb.category.findMany();
  console.log({user})
  return (
    <Button >hello world</Button>
  );
}
