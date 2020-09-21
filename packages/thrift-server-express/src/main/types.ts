import * as express from 'express'

import {
    IThriftProcessor,
    IThriftServerOptions,
} from '@statestitle/thrift-server-core'

export type IExpressServerOptions<
    TProcessor extends IThriftProcessor<express.Request>
> = IThriftServerOptions<express.Request, TProcessor>

export interface ICreateExpressServerOptions<
    TProcessor extends IThriftProcessor<express.Request>
> {
    path?: string
    thriftOptions: IExpressServerOptions<TProcessor>
}
