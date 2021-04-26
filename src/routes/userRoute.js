import {
    addNewUser, getUserWithID
} from '../controllers/userController';

import { Router } from 'express';
const router = new Router();


router.route('/user')
    .post(addNewUser);

router.route('/user/:userId')
    .get(getUserWithID);


// .get((req, res, next) => {
//     // middleware
//     console.log(`Request de: ${req.originalUrl}`)
//     console.log(`Request type: ${req.method}`)
//     next();
// }, getContacts)




// .delete(removeMark)

// app.route('/contact/:contactId')
//     // contact avec ID
//     .get(getContactWithID)

//     // mise à jour contact
//     .put(updateContact)

//     // supprimer contact    
//     .delete(deleteContact);


export default router;


