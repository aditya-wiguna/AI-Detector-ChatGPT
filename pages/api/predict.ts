import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  data: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const response = await fetch("https://api-inference.huggingface.co/models/Hello-SimpleAI/chatgpt-detector-roberta",
      {
        headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}` },
        method: "POST",
        body: JSON.stringify(req.body.text),
      }
    );

    const result = await response.json();
    res.status(200).json({ data: result[0] })
  }
}
