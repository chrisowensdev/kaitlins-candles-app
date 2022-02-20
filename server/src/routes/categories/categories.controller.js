function httpGetAllCategories(req, res) {
    return res.status(200).json();
}

function httpAddNewCategory(req, res) {
    return res.status(201).json();
}

function httpDeleteCategory(req, res) {
    return res.status(200).json();
}

module.exports = {
    httpGetAllCategories,
    httpAddNewCategory,
    httpDeleteCategory,
};
