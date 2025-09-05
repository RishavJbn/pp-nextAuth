import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

interface IDecodedToken {
  id: string;
  [key: string]: string | number | boolean | null | undefined;
}

export const datafromToken = (req: NextRequest): string => {
  try {
    const token = req.cookies.get("token")?.value || "";
    const decodedToken = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET!
    ) as IDecodedToken;
    return decodedToken.id;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Token verification failed");
  }
};
