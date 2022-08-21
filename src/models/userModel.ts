import { PrismaClient } from "@prisma/client";
import { IUser, IUserUpdate } from "../interface";

const create = async ({ userDocument, creditCard, value }: IUser, connection: PrismaClient ) => (
  connection.user.create({ 
    data: { userDocument, creditCardToken: creditCard, value  } 
  })
);

const getAll = async (connection: PrismaClient) => connection.user.findMany();

const getById = async (id: number, connection: PrismaClient) => connection.user.findMany({ where: { id } });

const update = async (id: number, payload: IUserUpdate, connection: PrismaClient) => (
  connection.user.update({ 
    data: { ...payload },
    where: { id }
  })
)

const deleteUser = (id: number, connection: PrismaClient) => (
  connection.user.delete({ where: { id } })
)

export default {
  create,
  getAll,
  getById,
  update,
  deleteUser,
}