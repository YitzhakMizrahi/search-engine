import Response from '../../Response';
import { API_KEY, CONTEXT_KEY, USE_DUMMY_DATA } from '../../keys';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = nc()
  // use connect based middleware
  .use(cors())
  .post(async (req, res) => {
    const searchTerm = req.query;
    const useDummyData = USE_DUMMY_DATA;

    if (!searchTerm) return;

    const data = useDummyData
      ? Response
      : await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`
        ).then((response) => response.json());

    res.status(200).json({ data: data });
  });

// export default async (req, res) => {
//   const searchTerm = req.query;
//   const useDummyData = USE_DUMMY_DATA;

//   if (!searchTerm) return;

//   const data = useDummyData
//     ? Response
//     : await fetch(
//         `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`
//       ).then((response) => response.json());

//   res.status(200).json({ data: data });
// };

export default handler;
