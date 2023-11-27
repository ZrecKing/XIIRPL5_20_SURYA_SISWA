const Siswa = require('../model/Datasiswa')

module.exports = {
     // get all user
    index: async (req, res) => {
        try {
            const siswa = await Siswa.find()
            if(siswa.length > 0){
                res.status(200).json({
                    status: true,
                    data: siswa,
                    method : req.method,
                    url: req.url
                })
            }else{
                res.json({
                    status: false,
                    message: "Tidak Ada Data"
                })
            }
        } catch (eror) {
            res.status(400).json({sucess: false})
        }
    },
    // get all user
    show: async (req, res) => {
        try {
            const siswa = await Siswa.findById(req.params.id)
            res.status(200).json({
                status: true,
                data: siswa,
                method : req.method,
                url: req.url,
                message: "Data Terambil"
            })
        } catch (error) {
            res.status(400).json({sucess: false})  
        }
    },

    store: async (req, res) => {
        try {
            const siswa = await Siswa.create(req.body)
            res.status(200).json({
                status: true,
                data: siswa,
                method : req.method,
                url: req.url,
                message: "Data Sudah Ditambahkan"
            })
        } catch (error) {
          res.status(400).json({sucess: false})  
        }
    },  
    update: async (req, res) => {
        try {
            const siswa = await Siswa.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.status(200).json({
                status: true,
                data: siswa,
                method : req.method,
                url: req.url,
                message: "Data Sudah Diubah"
            })
        } catch (error) {
            res.status(400).json({sucess: false})  
        }

    },
    delete: async (req, res) => {
        try {
             await Siswa.findByIdAndDelete(req.params.id)

            res.status(200).json({
                status: true,
                method : req.method,
                url: req.url,
                message: "Data Sudah Dihapus"
            })
        } catch (error) {
            res.status(400).json({sucess: false})  
        }
        
     
    
    }    
}