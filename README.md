# Arkenstone Inc.

Aplicação web para acompanhamento de cotações de ações, moedas e criptomoedas em tempo real.

## Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn ou pnpm

## Instalação

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/arkenstone.git
cd arkenstone
```

2. Instale as dependências

```bash
npm install
# ou
yarn
# ou
pnpm install
```

3. Configure as variáveis de ambiente

```bash
cp env.example .env.local
```

Edite o arquivo `.env.local` e adicione:

```
API_KEY=sua-chave-api-aqui
SESSION_SECRET=sua-chave-secreta-aqui
```

## Executando o projeto

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Build de Produção

```bash
npm run build
npm start
# ou
yarn build
yarn start
# ou
pnpm build
pnpm start
```

## Tecnologias

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
