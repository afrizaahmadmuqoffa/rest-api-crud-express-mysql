const express = require('express')
const MahasiswaController = require("../contollers/ControllerMahasiswa")

const router = express.Router()

router.get('/', MahasiswaController.getAllMahasiswa)
router.get('/:id', MahasiswaController.getMahasiswaById)
router.post('/', MahasiswaController.createMahasiswa)
router.put('/:id', MahasiswaController.updateMahasiswa)
router.delete('/:id', MahasiswaController.deleteMahasiswa)

module.exports = router
