const mongoose = require ('mongoose')

const DatasiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: false
    },
    absen: {
        type: String,
        required: [true, 'Silahkan isikan absen'],
        unique: true
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan isikan kelas'],
        unique: false
    },

    nis: {
        type: String,
        required: [true, 'Silahkan isikan nis'],
        unique: true
    },

    alamat : {
        type: String,
        required: [true, 'Silahkan isikan alamat'],
        unique: false
    }

})

module.exports = mongoose.model('Datasiswa', DatasiswaSchema)