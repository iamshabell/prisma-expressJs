import { Response, Request } from "express";
import {prisma} from '../config'

export const createBook = (bookDTO: any) => {
    return prisma.book.create({data: bookDTO, include: {author:true}})
    
};
export const getBooks = () => {

    return prisma.book.findMany({include: {author: true}})

};
export const getOneBook = (id: string) => {};
export const updateBook = (id:number, bookDTO: any) => {
    return prisma.book.update({data: bookDTO, where:{id}})
};
export const deleteBook = (id: string) => {};
