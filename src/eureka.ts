import { Eureka } from 'eureka-js-client';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const EurekaClient: any = Eureka;

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const eurekaClient = new EurekaClient({
  instance: {
    app: 'NEST-CV-SERVICE',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: {
      ['$']: 3000,
      ['@enabled']: true,
    },
    vipAddress: 'NEST-CV-SERVICE',
    dataCenterInfo: {
      name: 'MyOwn',
      ['@class']: 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
    },
  },

  eureka: {
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps/',
  },
});
