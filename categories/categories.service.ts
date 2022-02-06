import { Response, Request } from "express";
import { prisma } from "../config";

export const createCategory = (categoryDTO: any) => {
    return prisma.category.create({data: categoryDTO, include: {books: true}})
};
export const getCategories = () => {
    return prisma.category.findMany({include: {books: true, subCategories: true, parentCategory: true}})
};
export const getOneCategory = (id: string) => {};
export const updateCategory = (id: number, categoryDTO: any) => {
    return prisma.category.update({data:categoryDTO, where: {id}, include: {subCategories: true, parentCategory: true}})
};
export const deleteCategory = (id: string) => {};
