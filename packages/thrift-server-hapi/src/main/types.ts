import * as Hapi from 'hapi'

import {
    IThriftProcessor,
    IThriftServerOptions,
} from '@creditkarma/thrift-server-core'

export interface IHandlerOptions<TProcessor> {
    service: TProcessor
}

export type IHapiServerOptions<TProcessor extends IThriftProcessor<Hapi.Request>> = IThriftServerOptions<Hapi.Request, TProcessor>

export interface IHapiPluginOptions<TProcessor extends IThriftProcessor<Hapi.Request>> {
    path?: string
    auth?: false | string | Hapi.RouteOptionsAccess
    thriftOptions: IHapiServerOptions<TProcessor>
}

export interface ICreateHapiServerOptions<TProcessor extends IThriftProcessor<Hapi.Request>>
    extends IHapiPluginOptions<TProcessor> {
    port: number
}

export type ThriftHapiPlugin = Hapi.Plugin<void>
