import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req.body);
    try {
      const data = req.body;

      res.status(200).json({ message: "Data received", data });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to process data" });
    }
  }
}
