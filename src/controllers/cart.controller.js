
import * as services from "../services/carrito.services.js";

export const getAllCart = async (req, res, next) => {
  try {
    const response = await services.getAll();
    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const getCartById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cart = await services.getById(id);
    if (!cart) throw new Error("cart not found!");
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

export const createCart = async (req, res, next) => {
  try {
    const newCart = await services.create(req.body);
    if (newCart) throw new Error("Validation Error!");
    else res.json(newCart);
  } catch (error) {
    next(error);
  }
};

export const addProductToCart = async(req, res, next) => {
  try {
      const { CartId } = req.params;
      const { ProductId } = req.params;
      const newCartProduct= await services.addProductToCart(CartId, ProductId);       
      res.json(newCartProduct);
  } catch (error) {
      next(error);
  }
}