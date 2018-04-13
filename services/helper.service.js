//Use to create response body and send response to user
exports.createResponse = (req, res, err, data)=>{
    if (err) {
        res.status(200).json({status: 0, data: err});
    } else
        res.status(200).json({status: 1, data: data});
}