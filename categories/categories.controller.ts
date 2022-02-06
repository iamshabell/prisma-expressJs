import { Response, Request } from "express";
import * as categoryService from './categories.service';
;


export const createCategory = async (request: Request, response: Response) => {
    const newCategory = await categoryService.createCategory(request.body)
    console.log(newCategory);
    
    return response.json(newCategory)
    
};
export const getCategories = async (request: Request, response: Response) => {
    const categories = await categoryService.getCategories()

    return response.json(categories);
};
export const getOneCategory = async (request: Request, response: Response) => {};
export const updateCategory = async (request: Request, response: Response) => {

    const {id} = request.params
    const {parentCategoryId, ...categoryDTO} = request.body

    const updatedCategory = await categoryService.updateCategory(Number(id), {...categoryDTO, parentCategory: { connect: {id: parentCategoryId}}})
    return response.json(updatedCategory)
};
export const deleteCategory = async (request: Request, response: Response) => {};
