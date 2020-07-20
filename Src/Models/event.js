const connection = require('../Config/mysql')

module.exports = {
    getAll : (searchName) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM event e WHERE e.title LIKE '%${searchName}%' ORDER BY id ASC`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },

    inputEvent : (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO event SET ?', data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },

    deleteEvent : (eventId) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM event WHERE id = ?', eventId , (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}