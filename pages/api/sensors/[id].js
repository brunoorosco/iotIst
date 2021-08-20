import Sensors from '../../../db/models/sensores'

export default async function sensorsHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const resultadoCreate = await Sensors.findByPk(`${id}`)
        res.status(200).json(resultadoCreate);

      } catch (error) {
        console.log(error);
      }
      break

    case 'PUT':
      const user = await Sensors.findByPk(`${id}`);
      //console.log(produto);
      user.name = "Mouse Top";
    
      const resultadoSave = await user.save();
      console.log(resultadoSave);

      res.status(200).json({ id, name: name || `User ${id}` })
      break

    case 'DELETE':
      try {
        //assim
       // Sensors.destroy({ where: { id: `${id}` } });

        //ou assim
        const userDelete = await Sensors.findByPk(`${id}`)
        userDelete.destroy();
        res.status(200).json(userDelete);

      } catch (error) {
        console.log(error);
      }
      res.status(200).json({ id, name: name || `User ${id}` })
      break

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
