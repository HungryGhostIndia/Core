//Use to create response body and send response to user
exports.createResponse = (req, res, err, data)=>{
    if (err) {
        res.status(200).json({error: true, data: err});
    } else
        res.status(200).json({success: true, data: data});
}