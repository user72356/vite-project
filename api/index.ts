import { VercelRequest, VercelResponse } from "@vercel/node";
import hello from "shared/hello";

export default function handler(req: VercelRequest, res: VercelResponse)
{
    const message = hello();
    
    res.status(200).json(message);
}
