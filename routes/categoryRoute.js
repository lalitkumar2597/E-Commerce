import express from "express";


import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { CreateCategoryController, categoryControlller, deleteCategoryCOntroller, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";

const router = express.Router();

//routes 
router.post('/create-category',requireSignIn,isAdmin,CreateCategoryController)

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
    updateCategoryController
   
);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;
