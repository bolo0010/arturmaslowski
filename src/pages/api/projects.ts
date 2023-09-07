import type { NextApiRequest, NextApiResponse } from 'next'
import {list, ProjectsList} from "@/pages/api/list";

type Response = Array<ProjectsList>;

export default function projects(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === 'GET') {
    res.status(200).json(list)
  }
}
