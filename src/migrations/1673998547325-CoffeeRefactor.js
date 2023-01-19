"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeRefactor1673998547325 = void 0;
class CoffeeRefactor1673998547325 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`);
    }
}
exports.CoffeeRefactor1673998547325 = CoffeeRefactor1673998547325;
//# sourceMappingURL=1673998547325-CoffeeRefactor.js.map