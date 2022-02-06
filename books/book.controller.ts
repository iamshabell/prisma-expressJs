import { Response, Request } from "express";
import * as bookService from './book.service';

export const createBook = async (request: Request, response: Response) => {

    const newBook = await bookService.createBook(request.body)

    console.log(newBook);
    

    return response.json(newBook)
};
export const getBooks = async (request: Request, response: Response) => {

    const books = await bookService.getBooks()
    console.log(books);

    return response.json(books)
    
    
};
export const getOneBook = async (request: Request, response: Response) => {

    const {id} = request.params
    const {categoryId, ...bookDTO} = request.body
    const updatedBook = await bookService.updateBook(Number(id), { ...bookDTO, categories: { connect: {id: categoryId}}})
};
export const updateBook = (request: Request, response: Response) => {};
export const deleteBook = (request: Request, response: Response) => {};
