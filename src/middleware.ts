import { NextResponse } from "next/server";
import withAuth from "../src/middleware/withAuth";

export default withAuth(
  () => {
    return NextResponse.next();
  },
  ["/profile"]
);

export const config = {
  matcher: ["/profile"],
};