import express from 'express';
import { DisplayAddPage, DisplayContactListPage, DisplayEdit, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../../Controllers/contact-list';
const router = express.Router();

import { AuthGuard} from '../Util/index';

/*********************************** CONTACT-LIST ROUTES ***************************/

/* GET contact-list page. */
router.get('/contact-list', AuthGuard, DisplayContactListPage);

/* Display the Add Page */
router.get('/add', AuthGuard, DisplayAddPage);

/* Process the Add Request */
router.post('/add', AuthGuard, ProcessAddPage);

/* Display the Edit Page with Data injected from the db */
router.get('/edit/:id', AuthGuard, DisplayEdit);

/* Process the Edit request */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* Process the Delete request */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);

/*************************************** */
export default router;