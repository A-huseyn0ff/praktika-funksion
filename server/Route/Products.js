import express from 'express'
import { deleteProduct, getAll, getProduct, postProducts } from '../Controller/Products.js'

const router=express.Router()

router.get('/',getAll)
router.get('/:id',getProduct)
router.post('/',postProducts)
router.delete('/:id',deleteProduct)
export default router