import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cv')
export class Cv {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column({ nullable: true })
  headline: string;

  @Column({ type: 'text', nullable: true })
  personal_info: string;

  @Column({ type: 'text', nullable: true })
  technical_skills: string;

  @Column({ type: 'text', nullable: true })
  soft_skills: string;

  @Column({ type: 'text', nullable: true })
  work_experience: string;

  @Column({ type: 'text', nullable: true })
  education: string;

  @Column({ type: 'text', nullable: true })
  languages: string;

  @Column({ type: 'text', nullable: true })
  certifications: string;

  @Column({ type: 'text', nullable: true })
  projects: string;

  @Column({ type: 'text', nullable: true })
  summary: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
