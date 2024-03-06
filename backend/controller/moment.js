const serviceModel = require('../models/service_model')
const crouselModel = require('../models/crousel_model')

exports.add_service = async (req, res) => {
  const {
    title,
    description,
    service_type,
    status
  } = req.body;

  try {
    if(!title || !description){
      return res.status(500).send({
        message: "It should not emply value."
      });
    }

    const existdata=await serviceModel.findOne({title: title, service_type: service_type})
    if(existdata){
      return res.status(400).send({
        message: "title is allready exit!"
      })
    }
    const serviceData = await serviceModel.create({
      title,
      description,
      service_type,
      status
    })
    console.log("serviceData", serviceData)
    return res.status(200).send({
      message: "create successfully!", data: serviceData
    })
  }
  catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the serviceData."
    });
  }
}


exports.addcrousel = async (req, res) => {
  const {
    title,
    description,
    service_type,
    status,
  } = req.body;
  
  let document_file;
  req.file == undefined ? "" : document_file = req.file.path

  let uploadLogo=document_file? baseUrl+ document_file: ""


  try {
    if(!title || !description){
      return res.status(500).send({
        message: "It should not emply value."
      });
    }
    
    const existdata=await crouselModel.findOne({title: title, service_type: service_type})
    if(existdata){
      return res.status(400).send({
        message: "title is allready exit!"
      })
    }
    const serviceData = await crouselModel.create({
      title,
      description,
      service_type,
      logo: uploadLogo,
      status
    })
    console.log("serviceData", serviceData)
    return res.status(200).send({
      message: "create successfully!", data: serviceData
    })
  }
  catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the serviceData."
    });
  }
}



exports.serviceList = async (req, res) => {
  try {
    const serviceData = await serviceModel.find({service_type : "service"})
    console.log("serviceData", serviceData)
    if (serviceData.length>0) {
      res.status(200).send({ message: "get all serviceData list", data: serviceData })
    }else{
      res.status(204).send({ message: "data not found", data: serviceData })
    }
  } catch (err) {
    console.log(err.message)
    res.status(400).send({ message: "error", error: err.message })
  }
}

exports.crouselList = async (req, res) => {
  try {
    const serviceData = await crouselModel.find({service_type : "crousel"})
    console.log("serviceData", serviceData)
    if (serviceData.length>0) {
      res.status(200).send({ message: "get all serviceData list", data: serviceData })
    }else{
      res.status(204).send({ message: "data not found", data: serviceData })
    }
  } catch (err) {
    console.log(err.message)
    res.status(400).send({ message: "error", error: err.message })
  }
}


exports.corevaluelList = async (req, res) => {
  try {
    const serviceData = await crouselModel.find({service_type : "core"})
    console.log("serviceData", serviceData)
    if (serviceData.length>0) {
      res.status(200).send({ message: "get all serviceData list", data: serviceData })
    }else{
      res.status(204).send({ message: "data not found", data: serviceData })
    }
  } catch (err) {
    console.log(err.message)
    res.status(400).send({ message: "error", error: err.message })
  }
}

exports.techList = async (req, res) => {
  try {
    const serviceData = await crouselModel.find({service_type : "stack"})
    console.log("serviceData", serviceData)
    if (serviceData.length>0) {
      return res.status(200).send({ message: "get all serviceData list", data: serviceData })
    }else{
      res.status(204).send({ message: "data not found", data: serviceData })
    }
  } catch (err) {
    console.log(err.message)
    res.status(400).send({ message: "error", error: err.message })
  }
}

exports.offerList = async (req, res) => {
  try {
    const serviceData = await serviceModel.find({service_type : "offer"})
    console.log("serviceData", serviceData)
    if (serviceData.length>0) {
      res.status(200).send({ message: "get all serviceData list", data: serviceData })
    }else{
      res.status(204).send({ message: "data not found", data: serviceData })
    }
  } catch (err) {
    console.log(err.message)
    res.status(400).send({ message: "error", error: err.message })
  }
}


exports.serviceDetails = async (req, res) => {
  try {
    console.log(req.params.id)
    const restData = await serviceModel.findById({
      _id: req.params.id,
    })
    console.log("restData", restData)
    if (!restData || restData == undefined) {
      return res.send("not found ticket")
    }
    return res.status(200).send({
      message: "user resitered save data",
      data: restData
    })
  }
  catch (err) {
    console.log(err.message)
  }
}


exports.editService = async (req, res) => {
  try {

    const ticketdata = await serviceModel.find({ _id: req.params.id });
    if (ticketdata) {
      const updateData = await serviceModel.findByIdAndUpdate({ _id: req.params.id }, {
        $set: req.body
      })
      console.log("updateData", updateData)
      return res.send({ status: "update data successfully! ", "result": updateData })
    }
  }
  catch (err) {
    console.log(err.message)
  }
}


exports.deleteService = async (req, res) => {
  try {

    const ticketdata = await serviceModel.find({ _id: req.params.id });
    if (ticketdata) {
      const updateData = await serviceModel.findByIdAndRemove({ _id: req.params.id }, {
        $set: req.body
      })
      console.log("updateData", updateData)
      return res.send({ status: "Delete data successfully! " })
    }
  }
  catch (err) {
    console.log(err.message)
  }
}


exports.paginationData = async (req, res) => {

  let { page, size, sort } = req.query;
  if (!page) {
    page = 1;
  }

  if (!size) {
    size = 10;
  }

  const limit = parseInt(size);
  const user = await serviceModel.find().limit(limit)
  res.send({
    page,
    size,
    Info: user,
  });
}



// add offer
exports.addOffer = async (req, res) => {
  const {
    title,
    description,
    status
  } = req.body;

  try {
    if(!title || !description){
      return res.status(500).send({
        message: "It should not emply value."
      });
    }

    const serviceData = await offerSchema.create({
      title,
      description,
      status
    })
    console.log("serviceData", serviceData)
    return res.status(200).send({
      message: "create successfully!", data: serviceData
    })
  }
  catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the serviceData."
    });
  }
}








