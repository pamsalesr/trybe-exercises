// Exercício 1 : Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes .

db.clientes.aggregate([
  {
    $addFields: {
      idade: { $floor: {
        $divide: [
          { $subtract: ["$$NOW", "$dataNascimento"] },
          31536000000
        ]
      } }
    }
  }
]);

// Exercício 2 : Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.

db.clientes.aggregate([
  {
    $addFields: {
      idade: { $floor: {
        $divide: [
          { $subtract: ["$$NOW", "$dataNascimento"] },
          31536000000
        ]
      } }
    }
  },
  {
    $match: {
      idade: {
        $gte: 18, $lte: 25
      }
    }
  },
  {
    $count: "young_adult_clients"
  }
]).pretty();

// Exercício 3 : Remova os estágios $count e $match do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras .

db.clientes.aggregate([
  {
    $addFields: {
      idade: { $floor: {
        $divide: [
          { $subtract: ["$$NOW", "$dataNascimento"] },
          31536000000
        ]
      } }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  }
]);

// Exercício 4 : Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020 .

db.clientes.aggregate([
  {
    $addFields: {
      idade: { $floor: {
        $divide: [
          { $subtract: ["$$NOW", "$dataNascimento"] },
          31536000000
        ]
      } }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  }
]);

// Exercício 5 : Confira o número de documentos retornados pelo pipeline com o método itcount() . Até aqui, você deve ter 486 documentos sendo retornados.

db.clientes.aggregate([
  {
    $addFields: {
      idade: { $floor: {
        $divide: [
          { $subtract: ["$$NOW", "$dataNascimento"] },
          31536000000
        ]
      } }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  },
]).itcount();

// Exercício 6 : Ainda nesse pipeline , descubra os 5 estados com mais compras.


db.clientes.aggregate([
  {
    $addFields: {
      idade: { $floor: {
        $divide: [
          { $subtract: ["$$NOW", "$dataNascimento"] },
          31536000000
        ]
      } }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  },
  // -----
  /*
  Aqui eu estou buscando pelos estados com o maior número de clientes, e não o propsto pelo exercício '_'
  */
  // {
  //   $group: {
  //     _id: "$endereco.uf",
  //     count: { $sum: 1 }
  //   }
  // },
  // { $sort: { count: -1 } },
  { $limit: 5 }
]);

// Exercício 7 : Descubra o cliente que mais consumiu QUEIJO PRATO . Retorne um documento com a seguinte estrutura:
/**
{
  "nomeCliente": "NOME",
  "uf": "UF DO CLIENTE",
  "totalConsumido": 100
}
*/
