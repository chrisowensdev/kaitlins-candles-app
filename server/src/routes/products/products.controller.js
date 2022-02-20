function httpGetAllProducts(req, res) {
    return res.status(200).json();
}

function httpAddNewProduct(req, res) {
    return res.status(201).json();
}

function httpDeleteProduct(req, res) {
    return res.status(200).json();
}

module.exports = {
    httpGetAllProducts,
    httpAddNewProduct,
    httpDeleteProduct,
};
