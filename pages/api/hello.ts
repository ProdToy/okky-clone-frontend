// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseType = {
    [key: string]: any
    ok: boolean
}

export default function withHandler(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    fn: (
        request: NextApiRequest,
        response: NextApiResponse<ResponseType>
    ) => void
) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        if (req.method !== method) {
            return res.status(405).end()
        }

        try {
            fn(req, res)
        } catch (e) {
            return res.status(500).json({ e })
        }
    }
}
