import ky from 'ky';

export const api = ky.create({
  prefixUrl: process.env.API_URL,
  searchParams: {
    key: process.env.API_KEY || '',
  },
});
