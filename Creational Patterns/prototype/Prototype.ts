export abstract class Prototype {
    public clone(): Prototype{
        return Object.create(Prototype.prototype || null);
    }
}