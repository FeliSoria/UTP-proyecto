var pool = require('./bd'); //me trae la base de datos acá

async function getNovedades() {
    var query = "select * from novedades";
    var rows = await pool.query(query);
    return rows;
}



async function insertNovedades(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = { getNovedades, insertNovedades }