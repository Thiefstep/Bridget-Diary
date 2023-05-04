const db = require('../database/connect');

class Diary{

    constructor({ id, date, time, text, category}) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.description = text;
        this.category = category;
    }

    static async getAll(){
        const response = await db.query('SELECT * FROM diary ORDER BY id;')
        if (!response.rows.length){
            throw new Error('No diary available');
        }
        return response.rows.map(g=> new Diary(g))
    }

    static async getOneById(id){
        const response = await db.query('SELECT * FROM diary WHERE id =$1', [id]);
        if (response.rows.length !=1 ){
            throw new Error('Unable to find diary')
        }
        return new Diary(response.rows[0])
    }
}

module.exports = Diary;
