import { prismadb } from "@/lib/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Prisma } from "@prisma/client";

/**
 * GET function to retrieve a list of Todo items, optionally filtered by name.
 * @param {NextRequest} request - The incoming request object.
 * @returns {NextResponse} - JSON response with the list of Todo items or an error message.
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("search") || "";

    const filter = {
      where: {
        AND: [
          name
            ? { name: { contains: name, mode: Prisma.QueryMode.insensitive } }
            : {},
        ],
      },
      orderBy: { createdAt: "desc" },
    };

    const todos = await prismadb.todo.findMany(filter as object);

    return NextResponse.json(todos);
  } catch (error) {
    console.error("[GET TODOS]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

/**
 * POST function to create a new Todo item.
 * @param {NextRequest} request - The incoming request object.
 * @returns {NextResponse} - JSON response with the newly created Todo item or an error message.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, value, isCompleted = false } = body;

    if (!name || !value) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const newTodo = await prismadb.todo.create({
      data: {
        name,
        value,
        isCompleted,
      },
    });

    return NextResponse.json(newTodo);
  } catch (error) {
    console.error("[CREATE TODO]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
