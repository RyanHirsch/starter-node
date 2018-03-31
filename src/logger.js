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
  format: simple(),
  transports: [
    new transports.File({
      filename: 'error.log',
      level: 'error',
      format: combine(timestamp(), json()),
    }),
    new transports.File({ filename: 'combined.log', format: combine(timestamp(), json()) }),
  ],
});

if (isDev()) {
  logger.add(
    new transports.Console({
      format: simple(),
    })
  );
}

export default logger;
export const stream = {
  write(message) {
    logger.info(message);
  },
};
