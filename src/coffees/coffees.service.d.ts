import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { Connection, Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
export declare class CoffeesService {
    private readonly coffeeRepository;
    private readonly flavorRepository;
    private readonly connection;
    constructor(coffeeRepository: Repository<Coffee>, flavorRepository: Repository<Flavor>, connection: Connection);
    findAll(paginationQuery: PaginationQueryDto): Promise<Coffee[]>;
    findOneOrFail({ id: id }: {
        id: any;
    }): Promise<Coffee>;
    create(createCoffeeDto: CreateCoffeeDto): Promise<Coffee>;
    update(id: string, updateCoffeeDto: any): Promise<Coffee>;
    remove(id: string): Promise<Coffee>;
    recommendCoffe(coffee: Coffee): Promise<void>;
    private preloadFlavorByName;
}
