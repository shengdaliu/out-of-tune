const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, prettyPrint } = format

const logger = createLogger({
  //   defaultMeta: { service: 'out-of-tune' },
  level: 'info',
  format: format.combine(
    // format.timestamp({
    //   format: 'YYYY-MM-DD HH:mm:ss'
    // }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'out.log' })
  ]
})


// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    level: 'info',
    format: format.combine(
      timestamp(),
      format.colorize(),
      format.simple(),
    ),
    handleExceptions: true
  }))
}

module.exports = logger