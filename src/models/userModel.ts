import connection from "../database/connection";
import { IUser } from "../interface";

const create = async ({ userDocument, creditCard, value }: IUser) => (
  connection.user.create({ 
    data: { userDocument, creditCardToken: creditCard, value  } 
  })
);

const getAll = async () => connection.user.findMany();

const getById = async (id: number) => connection.user.findMany({ where: { id } });

export default {
  create,
  getAll,
  getById,
}