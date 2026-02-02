import winston from 'winston';
import { test } from '@playwright/test';
import path from 'path';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(info => {
      let testTitle = '';
      try {
        testTitle = ` [${path.basename(test.info().file)}]`;
      } catch (e) {
        // ignore
      }
      return `${info.timestamp}${testTitle} ${info.level}: ${info.message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'test-results/execution.log' })
  ]
});

export default logger;
