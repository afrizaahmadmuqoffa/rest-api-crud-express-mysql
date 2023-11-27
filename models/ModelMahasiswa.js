const db = require('../config/database')

class ModelMahasiswa {
    static getAllMahasiswa(callback) {
        db.query('SELECT * FROM mahasiswa', callback);
    }

    static getMahasiswaById(id, callback) {
        db.query('SELECT * FROM mahasiswa WHERE id = ?', id, callback);
    }

    static createMahasiswa(mahasiswa, callback) {
        db.query('INSERT INTO mahasiswa SET ?', mahasiswa, callback);
    }

    static updateMahasiswa(id, mahasiswa, callback) {
        db.query('UPDATE mahasiswa SET ? WHERE id = ?', [mahasiswa, id], callback);
    }

    static deleteMahasiswa(id, callback) {
        db.query('DELETE FROM mahasiswa WHERE id = ?', id, callback);
    }
}

module.exports = ModelMahasiswa
