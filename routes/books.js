const express = require('express');
const router = express.Router();
const {allBooks,bookDetail} = require('../controller/BookController');


router.use(express.json());



//전제 도서 조회  && 카테고리별 조회
router.get('/',allBooks);

//개별 도서 조회 
router.get('/:id',bookDetail);



module.exports = router
