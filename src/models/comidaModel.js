import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//Model de pegar todas comidas
export const listarTodos = async () => {
  return await prisma.comidas.findMany();
};

//Model de pegar pelo id
export const listarUm  = async (id) => {
  return await prisma.comidas.findUnique({
    where: { id },
  });
};

//Model do criart
export const criar = async (dados) => {
  const { id, ...dadosSemId } = dados;
  return await prisma.comidas.create({
    data: dadosSemId,
  });
};


//Model do delete
export const deletar = async (id) => {
  return await prisma.comidas.delete({
    where: { id },
  });
};

//Model do atualizar
export const atualizar = async (id, dados) => {
  return await prisma.comidas.update({
    where: { id },
    data: dados,
  });
};