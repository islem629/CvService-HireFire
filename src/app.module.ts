import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CvModule } from './cv/cv.module';
import { Cv } from './cv/cv.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // empty if XAMPP default
      database: 'cv_db',
      entities: [Cv],
      synchronize: true,
    }),

    CvModule, // import your feature module
  ],
})
export class AppModule {}
