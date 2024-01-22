import { Inject, Injectable } from '@nestjs/common';
import { TagEntity } from './tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @Inject('TagEntityRepository') private tagRepo: Repository<TagEntity>,
  ) {}

  findAll() {
    return this.tagRepo.find();
  }
}
