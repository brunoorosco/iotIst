// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default async (req, res) => {

//   res.status(200).json({ name: 'John Doe' })
// }
// pages/api/hello.js
import nc from "next-connect";
const Maquina = require('../../../db/models/maquinas');
const db = require('../../../db/config/database')

const handler = nc()

  //.use(someMiddleware())
  .get(async (req, res) => {
    const {
      method,
      body,
    } = req;

    const maquinas = await Maquina.findAll();
    //console.log(maquinas);

    res.statusCode = 200;
    // res.json({
    //   status: 'success',
    //   maquinas
    // });
    res.send(maquinas).statusCode(200).status('success');
  })


  .post(async (req, res) => {


    //   try {
    //     const resultado = await db.sync();
    //     console.log(resultado);

    //     const resultadoCreate = await Maquina.create({
    //         nome: 'mouse',
    //         preco: 10,
    //         descricao: 'Um mouse USB bonitão'
    //     })
    //     console.log(resultadoCreate);
    // } catch (error) {
    //     console.log(error);
    // }

    const { body } = req;
    // const { maquina } = req.query;
    const { maqName, modMaq, macMaq, ipMAq } = body;
    // const userId = slug;
    const newMaq = await models.maquinas.create({
      maqName,
      modMaq,
      macMaq,
      ipMaq,
      status: 1
    });
    return res.status(200).json({
      status: 'success',
      message: 'done',
      data: newMaq,
    });

  })

  .put(async (req, res) => {
    res.end("async/await is also supported!");
  })

  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });

export default handler;
