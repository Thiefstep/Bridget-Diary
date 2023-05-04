const db = require('../database/connect');

class Diary{

    constructor({ diary_id, diary_description}) {
        this.id = diary_id;
        this.description = diary_description;
    }

    static async getAll(){
        const response = await db.query('SELECT * FROM diary ORDER BY diary_id;')
        if (!response.rows.length){
            throw new Error('No diary available');
        }
        return response.rows.map(g=> new Diary(g))
    }

    static async getOneById(id){
        const response = await db.query('SELECT * FROM diary WHERE dairy_id =$1', [id]);
        if (response.rows.length !=1 ){
            throw new Error('Unable to find diary')
        }
        return new Diary(response.rows[0])
    }
}

module.exports = Diary;
