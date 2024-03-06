const express= require('express')
const router=express()
const agentController= require('../controller/index')
const ParkingServerController= require('../controller/moment')
const {upload} = require('../middleware/index')




//routes for Support Agent details
router.post('/api/signup', agentController.createAgent)
router.post('/api/signin', agentController.signin)
router.get('/api/getagentList', agentController.getAgentList)
router.get('/api/getagentDetails/:id', agentController.AgentDetails)
router.put('/api/UpdateAgentDetails/:id', agentController.UpdateAgentDetails)
router.get('/api/deleteAgentDetails/:id', agentController.deleteAgentTicket)


//routes for Parking Service Routes
router.post('/api/add_service', ParkingServerController.add_service)
router.get('/api/serviceList', ParkingServerController.serviceList)
router.get('/api/offerList', ParkingServerController.offerList)


router.post('/api/addcrousel', upload.single('logo'), ParkingServerController.addcrousel)
router.get('/api/crousellist', ParkingServerController.crouselList)
router.get('/api/corevaluellist', ParkingServerController.corevaluelList)
router.get('/api/techList', ParkingServerController.techList)


router.get('/api/serviceDetails/:id', ParkingServerController.serviceDetails)
router.put('/api/editService/:id', ParkingServerController.editService)
router.get('/api/deleteService/:id', ParkingServerController.deleteService)
router.get('/api/paginationData/:id', ParkingServerController.paginationData)



module.exports = router;