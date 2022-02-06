import { create } from "domain";
import { Response, Request,  } from "express";

import * as usersService from './user.service'

export const createUser = async (request: Request, response: Response) => {
    const {address, ...userDTO} = request.body

    // const newUser = await usersService.createUser(request.body)
    const newUser = await usersService.createUser({...userDTO, address: {create:address}})
    console.log(newUser);

    return response.json(newUser)
    
};
export const createAddress = async (request: Request, response: Response) => {

    const newAddress = await usersService.createAddress(request.body)

    console.log(newAddress);

    return response.json(newAddress)
    
};
export const getUsers = async (request: Request, response: Response) => {

    const users = await usersService.getUsers()
    return response.json(users)
};
export const getAddresses = async (request: Request, response: Response) => {

    const addresses = await usersService.getAddresses()
    return response.json(addresses)
};
export const getOneUser = async(request: Request, response: Response) => {

};

export const updateAuthor =  async (request: Request, response: Response) => {
    const { id} = request.params
    const {editorId, ...authorDTO} = request.body
    const updatedAuthor = await usersService.updateUser(Number(id), {...authorDTO, editor:{connect: {id:editorId}}})
    return response.json(updatedAuthor)
};

export const updatePublisher =  async (request: Request, response: Response) => {
    const { id} = request.params
    const {authorId,...publisherDTO} = request.body
    const updatedPublisher = await usersService.updateUser(Number(id), {...publisherDTO, authors: { connect: {id: authorId}}})
    return response.json(updatedPublisher)
}
export const updateUser = (request: Request, response: Response) => {};
export const deleteUser = (request: Request, response: Response) => {};
