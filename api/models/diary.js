const db = require('../database/connect');

class Diary{

    constructor({ diary_id, user_id, date, time, entry_text, category}) {
        this.diary_id = diary_id;
        this.user_id = user_id;
        this.date = date;
        this.time = time;
        this.entry_text = entry_text;
        this.category = category;
    }

    static async getAll(){
        const response = await db.query('SELECT * FROM diary ORDER BY id;')
        if (!response.rows.length){
            throw new Error('No diary available');
        }
        return response.rows.map(g=> new Diary(g))
    }

    static async getOneById(diary_id){
        const response = await db.query('SELECT * FROM diary WHERE id =$1', [diary_id]);
        if (response.rows.length !=1 ){
            throw new Error('Unable to find diary')
        }
        return new Diary(response.rows[0])
    }

    static async createEntry(data) {
        const { date, time, entry_text, category } = data;
        let response = await db.query("INSERT INTO diary (date, time, entry_text, category) VALUES ($1, $2, $3, $4) RETURNING diary_id;",
            [date, time, entry_text, category]);
        const newId = response.rows[0].diary_id;
        const newEntry = await Diary.getOneById(newId);
        return newEntry;
    }

    async destroy() {
        let response = await db.query("DELETE FROM diary WHERE diary_id = $1 RETURNING *;", [this.diary_id]);
        return new Post(response.rows[0]);
    }
}

module.exports = Diary;
