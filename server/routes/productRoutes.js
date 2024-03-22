import express  from "express";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
import { braintreePaymentsController,
     braintreeTokenController, 
    createProductController, 
    deleteProductController, 
    getSingleProductController, 
    getproductController,
     productCategoryController,
     productCountController,
     productFilterController,
     productListController,
     productPhotoController,
      relatedProductController,
      searchProductController,
      updateProductController } from "../controllers/productController.js";
import formidable from "express-formidable";




const router = express.Router();
//create the product
router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController)


//update the product
router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateProductController)





//get all products
router.get('/get-product',getproductController);

//get single product
router.get('/get-product/:slug',getSingleProductController);

//get photo
router.get('/product-photo/:pid',productPhotoController)

//delete product

router.delete('/delete-product/:pid',deleteProductController)

//fliter products

router.post('/product-filter',productFilterController)

//product count
router.get('/product-count',productCountController);

//product get per page

router.get('/product-list/:page',productListController);

//search product
router.get('/search/:keyword',searchProductController)

//similar product
router.get('/related-product/:pid/:cid',relatedProductController)

//category  wise product

router.get('/product-category/:slug',productCategoryController)



//paymentgateway 
//token

router.get('/braintree/token',braintreeTokenController)

//payments 

router.post('/braintree/payment',requireSignIn,braintreePaymentsController)


export default router;











