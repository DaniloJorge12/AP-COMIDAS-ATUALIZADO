import { PrismaClient } from '@prisma/client';

// Cria a instância do Prisma Client
const prisma = new PrismaClient();

// Dados para popular o banco
const comidas = [
  { id: 1, nome: "Pizza Pepperoni", tipo: "Prato Principal", preco: 38.0, descricao: "Pizza com molho de tomate, queijo e pepperoni." },
  { id: 2, nome: "Lasanha de Frango", tipo: "Prato Principal", preco: 36.0, descricao: "Lasanha com frango desfiado, molho branco e queijo." },
  { id: 3, nome: "Hambúrguer de Carne", tipo: "Lanche", preco: 20.0, descricao: "Hambúrguer suculento com queijo, alface e tomate." },
  { id: 4, nome: "Cachorro-quente Especial", tipo: "Lanche", preco: 12.0, descricao: "Pão com salsicha, queijo, milho e batata palha." },
  { id: 5, nome: "Salada Grega", tipo: "Salada", preco: 18.0, descricao: "Alface, tomate, pepino, azeitonas e queijo feta." },
  { id: 6, nome: "Risoto de Cogumelos", tipo: "Prato Principal", preco: 42.0, descricao: "Arroz arbóreo com cogumelos frescos e parmesão." },
  { id: 7, nome: "Espaguete à Carbonara", tipo: "Prato Principal", preco: 40.0, descricao: "Massa com molho cremoso de ovos, queijo e bacon." },
  { id: 8, nome: "Frango Grelhado", tipo: "Prato Principal", preco: 28.0, descricao: "Peito de frango temperado e grelhado, servido com legumes." },
  { id: 9, nome: "Batata Frita", tipo: "Acompanhamento", preco: 10.0, descricao: "Porção de batatas fritas crocantes." },
  { id: 10, nome: "Coxinha de Frango", tipo: "Salgado", preco: 6.0, descricao: "Salgado de massa recheado com frango desfiado." },
  { id: 11, nome: "Pastel de Queijo", tipo: "Salgado", preco: 7.0, descricao: "Pastel frito recheado com queijo derretido." },
  { id: 12, nome: "Bolo de Chocolate", tipo: "Sobremesa", preco: 15.0, descricao: "Bolo fofinho com cobertura de chocolate." },
  { id: 13, nome: "Mousse de Maracujá", tipo: "Sobremesa", preco: 12.0, descricao: "Mousse aerado com sabor intenso de maracujá." },
  { id: 14, nome: "Pudim de Leite", tipo: "Sobremesa", preco: 10.0, descricao: "Pudim cremoso com calda de caramelo." },
  { id: 15, nome: "Suco de Laranja", tipo: "Bebida", preco: 7.0, descricao: "Suco natural de laranja, sem açúcar." },
  { id: 16, nome: "Refrigerante Cola", tipo: "Bebida", preco: 6.0, descricao: "Lata de refrigerante de cola (350ml)." },
  { id: 17, nome: "Água Mineral", tipo: "Bebida", preco: 4.0, descricao: "Garrafa de água mineral sem gás." },
  { id: 18, nome: "Chá Gelado", tipo: "Bebida", preco: 5.0, descricao: "Chá preto gelado com limão e hortelã." },
  { id: 19, nome: "Omelete Simples", tipo: "Prato Principal", preco: 16.0, descricao: "Omelete com ovos, queijo e temperos." },
  { id: 20, nome: "Crepioca de Frango", tipo: "Prato Principal", preco: 14.0, descricao: "Massa de tapioca com frango desfiado e queijo." },
  { id: 21, nome: "Espetinho de Carne", tipo: "Prato Principal", preco: 22.0, descricao: "Espetinhos de carne temperada grelhados." },
  { id: 22, nome: "Filé de Peixe", tipo: "Prato Principal", preco: 35.0, descricao: "Filé de peixe grelhado com limão e ervas." },
  { id: 23, nome: "Arroz à Grega", tipo: "Acompanhamento", preco: 12.0, descricao: "Arroz com legumes coloridos e temperos suaves." },
  { id: 24, nome: "Feijão Tropeiro", tipo: "Acompanhamento", preco: 14.0, descricao: "Feijão misturado com farinha, bacon e temperos." },
  { id: 25, nome: "Purê de Batata", tipo: "Acompanhamento", preco: 10.0, descricao: "Purê cremoso de batata com manteiga." },
  { id: 26, nome: "Polenta Frita", tipo: "Acompanhamento", preco: 11.0, descricao: "Tiras de polenta frita crocantes." },
  { id: 27, nome: "Espetinho de Frango", tipo: "Prato Principal", preco: 20.0, descricao: "Espetinhos de peito de frango temperados." },
  { id: 28, nome: "Quiche de Alho-Poró", tipo: "Prato Principal", preco: 25.0, descricao: "Quiche cremosa de alho-poró e queijo." },
  { id: 29, nome: "Wrap de Frango", tipo: "Lanche", preco: 18.0, descricao: "Tortilha recheada com frango, alface e molho." },
  { id: 30, nome: "Hambúrguer Vegetariano", tipo: "Lanche", preco: 22.0, descricao: "Hambúrguer de grão de bico, queijo coalho e rúcula." },
  { id: 31, nome: "Panqueca de Carne", tipo: "Prato Principal", preco: 28.0, descricao: "Panquecas recheadas com carne moída e molho." },
  { id: 32, nome: "Torta de Frango", tipo: "Prato Principal", preco: 30.0, descricao: "Torta salgada recheada com frango desfiado." },
  { id: 33, nome: "Sushi Combo", tipo: "Prato Principal", preco: 45.0, descricao: "Combo com 12 peças variadas de sushi." },
  { id: 34, nome: "Yakissoba Tradicional", tipo: "Prato Principal", preco: 38.0, descricao: "Macarrão oriental com legumes e molho especial." },
  { id: 35, nome: "Temaki de Salmão", tipo: "Prato Principal", preco: 25.0, descricao: "Cone de alga recheado com arroz e salmão." },
  { id: 36, nome: "Coxinha de Queijo", tipo: "Salgado", preco: 6.5, descricao: "Salgado frito com massa de batata e queijo." },
  { id: 37, nome: "Esfiha de Carne", tipo: "Salgado", preco: 7.0, descricao: "Massa aberta recheada com carne temperada." },
  { id: 38, nome: "Churros com Doce de Leite", tipo: "Sobremesa", preco: 8.0, descricao: "Churros crocantes com recheio de doce de leite." },
  { id: 39, nome: "Sorvete de Chocolate", tipo: "Sobremesa", preco: 9.0, descricao: "Sorvete cremoso sabor chocolate." },
  { id: 40, nome: "Mousse de Chocolate", tipo: "Sobremesa", preco: 12.0, descricao: "Mousse aerado com chocolate meio amargo." },
  { id: 41, nome: "Bolo de Cenoura", tipo: "Sobremesa", preco: 10.0, descricao: "Bolo fofinho de cenoura com cobertura de chocolate." },
  { id: 42, nome: "Panqueca Doce", tipo: "Sobremesa", preco: 11.0, descricao: "Panqueca recheada com doce de leite e morango." },
  { id: 43, nome: "Salada de Frutas", tipo: "Sobremesa", preco: 9.0, descricao: "Mix de frutas frescas da estação." },
  { id: 44, nome: "Suco Detox", tipo: "Bebida", preco: 8.0, descricao: "Suco de frutas e verduras para desintoxicação." },
  { id: 45, nome: "Limonada Suíça", tipo: "Bebida", preco: 7.5, descricao: "Limonada batida com leite condensado." },
  { id: 46, nome: "Cerveja Pilsen", tipo: "Bebida", preco: 9.0, descricao: "Cerveja leve e refrescante." },
  { id: 47, nome: "Vinho Branco", tipo: "Bebida", preco: 28.0, descricao: "Taça de vinho branco suave." },
  { id: 48, nome: "Café Latte", tipo: "Bebida", preco: 6.5, descricao: "Café expresso com leite vaporizado." },
  { id: 49, nome: "Torta de Limão", tipo: "Sobremesa", preco: 12.0, descricao: "Torta cremosa de limão com merengue." },
  { id: 50, nome: "Brownie com Sorvete", tipo: "Sobremesa", preco: 15.0, descricao: "Brownie quente servido com sorvete de creme." }
];

async function main() {
    console.log('Iniciando o processo de seed...');

    await prisma.comidas.deleteMany();
    console.log('Registros existentes de Comida deletados.');

    const result = await prisma.comidas.createMany({
        data: comidas,
        skipDuplicates: true,
    });

    console.log(`Seed concluído! ${result.count} novos registros de Comida criados.`);
}

main()
    .catch((e) => {
        console.error("ERRO ao executar o Seed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        console.log("Conexão com o Prisma fechada.");
    });