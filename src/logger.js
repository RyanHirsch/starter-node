import { createLogger, format, transports } from 'winston';

import { isDev } from './config';

const { combine, timestamp, json, simple } = format;

// error
// warn
// info
// verbose
// debug
// silly
const levels = {
  test: 'error',
  development: 'debug',
  production: 'info',
};

const logger = createLogger({
  level: levels[process.env.NODE_ENV] || 'info',
  format: combine(timestamp(), json()),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});

if (isDev()) {
  logger.add(
    new transports.Console({
      format: combine(timestamp(), simple()),
    })
  );
}

export default logger;
