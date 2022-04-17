import express from 'express';
const router = express.Router();

// import instance of controller 
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProductsPage, DisplayServicesPage } from '../../Controllers/index';

/*********************************** TOP-LEVEL ROUTES ***************************/

/* GET home page. */
router.get('/', DisplayHomePage); 


/* GET home page. */
router.get('/home', DisplayHomePage);


/* GET about page. */
router.get('/about', DisplayAboutPage);


/* GET projects page. */
router.get('/projects', DisplayProductsPage);


/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);


/*************************************** */
export default router;