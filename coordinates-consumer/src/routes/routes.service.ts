import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Route, RouteDocument } from './entities/route.entity';
import { Model } from 'mongoose';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(Route.name) private readonly routeModel: Model<RouteDocument>,
  ) {}

  create(createRouteDto: CreateRouteDto) {
    return 'This action adds a new route';
  }

  findAll() {
    return this.routeModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
