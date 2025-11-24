// cv/dto/create-cv.dto.ts
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCvDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsString()
  @IsOptional()
  headline?: string;

  @IsString()
  @IsOptional()
  personal_info?: string;

  @IsString()
  @IsOptional()
  technical_skills?: string;

  @IsString()
  @IsOptional()
  soft_skills?: string;

  @IsString()
  @IsOptional()
  work_experience?: string;

  @IsString()
  @IsOptional()
  education?: string;

  @IsString()
  @IsOptional()
  languages?: string;

  @IsString()
  @IsOptional()
  certifications?: string;

  @IsString()
  @IsOptional()
  projects?: string;

  @IsString()
  @IsOptional()
  summary?: string;
}
