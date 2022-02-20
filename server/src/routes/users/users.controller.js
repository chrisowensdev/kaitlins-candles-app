function httpGetAllUsers(req, res) {
    return res.status(200).json();
}

function httpAddNewUser(req, res) {
    return res.status(201).json();
}

function httpDeleteUser(req, res) {
    return res.status(200).json();
}

module.exports = {
    httpGetAllUsers,
    httpAddNewUser,
    httpDeleteUser,
};
