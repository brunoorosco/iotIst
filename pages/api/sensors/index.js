import nextConnect from 'next-connect';
//const models = require('../../../db/models/index');
const Maqui = require('../../../db/models/maquinas')

const handler = nextConnect()
    // Middleware
    // .use(middleware)
    // Get method
    .get(async (req, res) => {
        // Maqui.sync()
        await Maqui.findAll({ limit: 1 })
            .then(notes => {
                res.json(notes)
                res.statusCode = 200;
            })
            .catch((e) => console.log(e))
    })
    // Post method
    .post(async (req, res) => {
        const {maqName, tipoMAq, modMaq, ipMac} = req.body 
        console.log(req)
        // const maquina = await Maqui.create({
        //     maqName: '',
        //     status: 1
        // }, { fields: ['username'] });
        // let's assume the default of isAdmin is false
        console.log(maqName); // 'alice123'
        console.log(tipoMAq); // false
      
        return res.status(200).json({
            status: 'success',
            message: 'done',
            data: maquina.id,
        });
    })
    // Put method
    .put(async (req, res) => {
        res.end('method - put');
    })
    // Patch method
    .patch(async (req, res) => {
        throw new Error('Throws me around! Error can be caught and handled.');
    });

export default handler;
