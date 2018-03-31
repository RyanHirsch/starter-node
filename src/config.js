import env from 'dotenv';

export function isTest() {
  return /^test$/i.test(process.env.NODE_ENV);
}

export function isDev() {
  return /^development$/i.test(process.env.NODE_ENV);
}

export function isProd() {
  return /^production$/i.test(process.env.NODE_ENV);
}

export default async function getConfig() {
  env.config();
  return {
    port: process.env.PORT || 3003,
  };
}
