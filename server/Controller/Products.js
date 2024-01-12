import  { Pro }  from '../Models/Products.js'

export const getAll=async(req,res)=>{
    const data= await Pro.find({})
    res.send(data)
}

export const getProduct=async(req,res)=>{
    const id=req.params.id
    const data= await Pro.findById(id)
    res.send(data)
}
export const postProducts=async(req,res)=>{
    
    const data=new Pro ({
icon:req.body.icon,
name:req.body.name,
title:req.body.title
    })
    const save= await data.save()
    res.send(save)
}
export const deleteProduct=async(req,res)=>{
    try {
        const id=req.params.id
    const data=await Pro.findByIdAndDelete(id)
    res.send(data)
    } catch (error) {
        res.status(500).json(error)
    }
}