import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

export const productsCollectionName = "products";

const ProductSchema = new Schema({
    nombre: { type: String, required: true, index: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    destino: { type: String, required: true, unique: true  },
    personas: { type: Number, required: true },
    dias: { type: Number, required: true },
    imagen:{type:String,required:true},
    categoria:{type:String,required:true},
    quantity:{type:Number,required:true}
 
    
});
ProductSchema.plugin(mongoosePaginate)

export const ProductModel = model(productsCollectionName, ProductSchema);