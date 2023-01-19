import { Flavor } from "./flavor.entity";
export declare class Coffee {
    id: number;
    title: string;
    brand: string;
    recommendations: number;
    flavors: Flavor[];
}
