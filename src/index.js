import app from './app';
import getConfig from './config';
import logger from './logger';

function started(err) {
  if (err) {
    logger.log('error', err);
    throw err;
  }
  logger.log('info', `Up and running ${this.address().port}`);
}

getConfig().then(config => app.listen(config.port, started));
