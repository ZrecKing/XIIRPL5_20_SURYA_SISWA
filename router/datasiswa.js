const express = require('express')
const router = express.Router()

const siswacontroller = require('../controllers/siswa')

router.get('/Datasiswa', siswacontroller.index)

router.get('/Datasiswa/:id', siswacontroller.show)
   router.post('/Datasiswa', siswacontroller.store)
   router.put('/Datasiswa/:id', siswacontroller.update )
   router.delete('/Datasiswa/:id', siswacontroller.delete)
  
   module.exports = router