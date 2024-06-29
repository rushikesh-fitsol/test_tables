// setup router 
import { Router } from 'express';
import { generateform, getanswer, getquestion, getquestions, saveanswer } from '../controllers/controller';


const router = Router();

router.get('/getqs', getquestions);
router.get('/getqs/:id', getquestion);

router.post("/getans", getanswer);
router.post("/generateform", generateform);

router.post("/saveans", saveanswer);


export default router;