import { NextApiRequest, NextApiResponse } from 'next';
import { DOMParser } from '@xmldom/xmldom';

const { NEXT_PUBLIC_URL } = process.env;

interface NextDataProps {
  props?: any;
  page?: string;
  query?: Record<string, any>;
  buildId?: string;
  isFallback?: boolean;
  gssp?: boolean;
  [key: string]: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NextDataProps>
): Promise<void> {
  let { path } = req.query;

  if (!NEXT_PUBLIC_URL) {
    throw new Error('NEXT_PUBLIC_URL environment variable is not defined');
  }

  const pathString = Array.isArray(path) ? path.join('/') : (path || '');

  const pageRes = await fetch(NEXT_PUBLIC_URL + pathString);
  const pageText = await pageRes.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(pageText, 'text/html');
  
  const nextPropsElement = doc.getElementById('__NEXT_DATA__');
  
  if (!nextPropsElement) {
    res.status(200).json({});
    return;
  }

  const nextPropsContent = nextPropsElement.textContent || '';
  let data: NextDataProps = {};
  
  try {
    data = JSON.parse(nextPropsContent);
  } catch (e) {
    // return empty object
    console.error('Failed to parse __NEXT_DATA__ content:', e);
  }
  
  res.status(200).json(data);
}