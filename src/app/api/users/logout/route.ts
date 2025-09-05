import { NextResponse } from "next/server";
// Removed unused import of react-hot-toast

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "logout successfully",
      success: true,
    });

    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    // Removed client-side toast usage; handle notifications in frontend

    return response;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
