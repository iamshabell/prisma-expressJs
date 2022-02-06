import { prisma } from "../config";

export const createUser = (userDTO: any) => {

    return prisma.user.create({data: userDTO})
};
export const createAddress = (addressDTO: any) => {

    return prisma.address.create({data: addressDTO})
};
export const getUsers = () => {
    
    return prisma.user.findMany({include: {address: true, author: true,editor: true}}); 
}
export const getAddresses = () => {
    
    return prisma.address.findMany(); 
}
export const getOneUser = (id: number) => {

    return prisma.user.findUnique({where: {id: id}})
};
export const updateUser = (id: number,userDTO: any) => {
    return prisma.user.update({data: userDTO, where: {id},include:{editor:true, author:true}})
};
export const deleteUser = (id: string) => {};
