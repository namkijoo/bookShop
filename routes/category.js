//남기주
const express = require('express');
const router = express.Router();
const {allCategory} = require('../controller/CategoryController');


router.use(express.json());



//카테고리 전체 목록 조회
router.get('/',allCategory);



module.exports = router
