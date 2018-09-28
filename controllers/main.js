

// get list
function getData(req, res){
  res.status(200).json({message:"get data ok!"});
}

module.exports = {
  getData: getData
}