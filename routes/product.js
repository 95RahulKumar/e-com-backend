const express = require('express');
const router = express.Router();
const Authentication = require('../utils/auth');
const {autherizedRole} = require('../utils/authRole');
const productController = require('../controller/product');

 router.get('/products',productController.getAllProducts)
 .get('/product-by-id',productController.getProduct)
 .get('/categories',productController.getcategories)
 .get('/product/analitics',Authentication,productController.productAnalitics)
 .post('/products/new',Authentication,autherizedRole('admin'),productController.creatProduct)
 .put('/product-update',Authentication,autherizedRole('admin'),productController.modifyProduct)
 .delete('/product-delete',Authentication,autherizedRole('admin'),productController.deleteProdut)
 .put('/review',Authentication,Authentication,Authentication,productController.createProductReview)
 .get('/review',productController.getProductReview)
 .delete('/reviews',Authentication,productController.deleteProductReview)
module.exports = router;
