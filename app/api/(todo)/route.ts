import { prismadb } from "@/lib/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';

    const filter = search ? { where: { name: { contains: search, mode: Prisma.QueryMode.insensitive } } } : null;

    const todos = await prismadb.todo.findMany({
      ...filter,
      include: {
        category: true,
      },
    });

    console.log(todos);
    return NextResponse.json(todos);
  } catch (error) {
    console.error("[GET TODOS]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
