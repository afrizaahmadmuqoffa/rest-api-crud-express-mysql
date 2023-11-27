const ModelMahasiswa = require("../models/ModelMahasiswa")

class MahasiwaController {
    static getAllMahasiswa(req, res) {
        ModelMahasiswa.getAllMahasiswa((err, result) => {
            if (err) {
                res.status(500).json(err)
                return
            }
            res.json(result)
        })
    }

    static getMahasiswaById(req, res) {
        const id = req.params.id
        ModelMahasiswa.getMahasiswaById(id, (err, result) => {
            if (err) {
                res.status(500).json(err)
                return
            }
            res.json(result)
        })
    }

    static createMahasiswa(req, res) {
        const createDataMahasiswa = req.body
        ModelMahasiswa.createMahasiswa(createDataMahasiswa, (err, result) => {
            if (err) {
                res.status(500).json(err)
                return
            }
            res.json(result)
        })
    }

    static updateMahasiswa(req, res) {
        const id = req.params.id
        const updateMahasiswa = req.body
        ModelMahasiswa.updateMahasiswa(id, updateMahasiswa, (err, result) => {
            if (err) {
                res.status(500).json(err)
                return
            }
            res.json(result)
        })
    }

    static deleteMahasiswa(req, res) {
        const id = req.params.id
        ModelMahasiswa.deleteMahasiswa(id, (err) => {
            if (err) {
                res.status(500).json(err)
                return
            }
            res.json({ message: 'Success deleted!' });
        })
    }
}

module.exports = MahasiwaController