import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cv } from './cv.entity';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';

// cv/cv.service.ts
@Injectable()
export class CvService {
  constructor(
    @InjectRepository(Cv)
    private readonly cvRepository: Repository<Cv>,
  ) {}

  create(createCvDto: CreateCvDto): Promise<Cv> {
    const cv = this.cvRepository.create(createCvDto);
    return this.cvRepository.save(cv);
  }

  findAll(): Promise<Cv[]> {
    return this.cvRepository.find();
  }

  async findOne(id: number): Promise<Cv> {
    const cv = await this.cvRepository.findOne({ where: { id } });
    if (!cv) {
      throw new NotFoundException(`CV with id ${id} not found`);
    }
    return cv;
  }

  // 👉 NEW: find by user_id
  async findByUserId(userId: number): Promise<Cv> {
    const cv = await this.cvRepository.findOne({ where: { user_id: userId } });
    if (!cv) {
      throw new NotFoundException(`CV for user ${userId} not found`);
    }
    return cv;
  }

  async update(id: number, updateCvDto: UpdateCvDto): Promise<Cv> {
    const cv = await this.findOne(id);
    Object.assign(cv, updateCvDto);
    return this.cvRepository.save(cv);
  }

  async remove(id: number): Promise<void> {
    const result = await this.cvRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`CV with id ${id} not found`);
    }
  }
}
