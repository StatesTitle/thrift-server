import { LogFunction, makeLogger } from '@statestitle/thrift-server-core'

export const defaultLogger: LogFunction = makeLogger('thrift-client')
