import pool from '../utils/pool';

export default class Hero {
    id;
    name;
    alias;
    quirk;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.alias = row.alias;
        this.quirk = row.quirk;
    }
    static async insert({ name, alias, quirk }) {
        const { rows } = await pool.query('INSERT INTO characters (name, alias, quirk) VALUES ($1, $2, $3) RETURNING *',
            [name, alias, quirk]
        )
        return new Hero(rows[0]);
    }
    static async getById(id) {
        const { rows } = await pool.query('SELECT * FROM characters WHERE id=$1', [id]);
        return new Hero(rows[0]);
    }
}