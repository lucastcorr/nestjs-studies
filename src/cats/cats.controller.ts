import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Cat } from './cats.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }

    @Post()
    create(@Req() request: Request) {
        return this.catsService.create(request.body);
    }
}
