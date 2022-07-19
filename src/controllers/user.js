const {request, response} = require('express');

const getAllUsers = (req = request, res = response) => {

    res.status(200).json({
        users: "getAllUsers"
    });


}



module.exports = {
    getAllUsers
}
