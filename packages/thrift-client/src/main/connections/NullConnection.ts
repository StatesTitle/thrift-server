import * as Core from '@statestitle/thrift-server-core'

export class NullConnection extends Core.ThriftConnection<any> {
    public send(dataToSend: Buffer, context: any = {}): Promise<Buffer> {
        return Promise.reject(new Error(`Not implemented`))
    }
}
