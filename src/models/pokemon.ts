import IPokemon from "../interfaces/pokemon.interface";

export default class Pokemon implements IPokemon {
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;

    constructor(
        id: number,
        hp: number = 100,
        cp: number = 10,
        name: string = 'name',
        picture: string = 'http://...',
        types: Array<string> = ['Normal'],
    ) {
        this.id = id;
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
    }
}