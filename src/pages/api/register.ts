import { signUp} from "@/utils/db/servicefirebase";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    nama: string;
    alamat: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        await signUp(req.body, (result: { status: string; message: string }) => {
            if (result.status === "success") {
                res.status(200).json({ nama: result.message, alamat: "" });
            } else {
                res.status(400).json({ nama: result.message, alamat: ""  });
            }
        });
    }
    else {
        res.status(405).json({ nama: "Method Not Allowed", alamat: "" });
    }
}