import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { eurekaClient } from './eureka';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

  console.log(`NestJS running on port ${PORT}`);

  // Register with Eureka
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  eurekaClient.start((error: unknown) => {
    if (error) {
      console.error('Error registering with Eureka:', error);
    } else {
      console.log('NestJS registered in Eureka!');
    }
  });
}

bootstrap();
