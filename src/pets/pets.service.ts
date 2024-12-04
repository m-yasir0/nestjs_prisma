import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PrismaService } from 'src/prisma.service';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) { }

  create(createPetDto: CreatePetDto) {
    return this.prisma.pet.create({
      data: createPetDto,
    });
  }

  findAll(): Pet[] {
    return [];
  }

  findOne(id: number) {
    return `This action returns a #${id} pet`;
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
