import Response from '../../Response';
import { API_KEY, CONTEXT_KEY, USE_DUMMY_DATA } from '../../keys';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Rest of the API logic
  const searchTerm = req.query;
  const useDummyData = USE_DUMMY_DATA;

  if (!searchTerm) return;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`
      ).then((response) => response.json());

  res.status(200).json({ data: data });
}

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
