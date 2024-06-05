import { prismadb } from "@/lib/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * GET function to retrieve a Todo item by its ID.
 * @param {NextRequest} request - The incoming request object.
 * @returns {NextResponse} - JSON response with the Todo item or an error message.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { todoId: string } }
) {
  try {
    const id = params.todoId;

    if (!id) {
      return new NextResponse("Missing todo ID", { status: 400 });
    }

    const todo = await prismadb.todo.findUnique({
      where: { id },
    });

    if (!todo) {
      return new NextResponse("Todo not found", { status: 404 });
    }

    return NextResponse.json(todo);
  } catch (error) {
    console.error("[GET TODO BY ID]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

/**
 * PATCH function to update a Todo item.
 * @param {NextRequest} request - The incoming request object.
 * @returns {NextResponse} - JSON response with the updated Todo item or an error message.
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { todoId: string } }
) {
  try {
    const id = params.todoId;

    if (!id) {
      return new NextResponse("Missing todo ID", { status: 400 });
    }

    const body = await request.json();
    const { name, value, isCompleted } = body;
    console.log(isCompleted)
    const updatedTodo = await prismadb.todo.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(value !== undefined && { value }),
        ...(isCompleted !== undefined && { isCompleted }),
      },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    console.error("[UPDATE TODO]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

/**
 * DELETE function to remove a Todo item by its ID.
 * @param {NextRequest} request - The incoming request object.
 * @returns {NextResponse} - Response with status 204 on success, or an error message.
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { todoId: string } }
) {
  try {
    const id = params.todoId;

    if (!id) {
      return new NextResponse("Missing todo ID", { status: 400 });
    }

    await prismadb.todo.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[DELETE TODO]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
