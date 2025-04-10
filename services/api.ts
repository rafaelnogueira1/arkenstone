import ky from 'ky';

export const api = ky.create({
  prefixUrl: process.env.API_URL,
  searchParams: {
    key: process.env.API_KEY || '',
  },
});

export const api_finance = api.extend((options) => ({
  prefixUrl: `${options.prefixUrl}finance`,
}));

// const response = await api_finance.get('/').json();
