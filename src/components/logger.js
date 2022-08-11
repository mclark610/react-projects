import {createLogger, format, transports} from 'winston';

/*
https://www.npmjs.com/package/winston
*/

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'YYYYMMDD HH:mm:ss.SSS'
    }),
    format.splat(),
    format.colorize(),
    format.printf(info => `[${info.level}] ${info.timestamp}: ${info.message}`)
  ),
  transports: [
    new transports.Console()
  ]
});

export{logger};
