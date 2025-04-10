type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '9ed72a1b',
    amount: 250,
    status: 'success',
    email: 'john@company.com',
  },
  {
    id: '63f4c8d5',
    amount: 75,
    status: 'failed',
    email: 'sarah@test.com',
  },
  {
    id: 'b2e9a147',
    amount: 300,
    status: 'success',
    email: 'dev@startup.co',
  },
  {
    id: '5d8c31f6',
    amount: 150,
    status: 'processing',
    email: 'contact@business.net',
  },
  {
    id: 'a4f7e923',
    amount: 200,
    status: 'pending',
    email: 'support@service.com',
  },
  {
    id: '1b9c54d8',
    amount: 175,
    status: 'success',
    email: 'info@agency.io',
  },
  {
    id: '7e2d6f8a',
    amount: 225,
    status: 'failed',
    email: 'hello@startup.dev',
  },
  {
    id: '3c8b5a9d',
    amount: 400,
    status: 'processing',
    email: 'team@company.org',
  },
];
