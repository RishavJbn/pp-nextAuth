import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const datafromToken = (req: NextRequest) => {
  try {
    const token = req.cookies.get("token")?.value || "";
    const decodedToken: unknown = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET!
    );
    return decodedToken.id;
  } catch (error: unknown) {
    throw new Error(error.message);
  }
};
