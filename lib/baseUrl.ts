export const baseUrl = process.env.NEXT_PUBLIC_ENVIRONMENT! === 'production' ? `${process.env.NEXT_PUBLIC_BASE_URL!}/api`:"http://localhost:3000/api";