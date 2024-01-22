import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller()
export class TagController {
  constructor(private tagService: TagService) {}

  @Get('/tags')
  getTags() {
    return this.tagService.findAll();
  }
}
