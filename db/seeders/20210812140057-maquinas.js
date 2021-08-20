'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Maquinas', [
      {
        maqName: 'COSTURA A',
        modMaq: 'RETA',
        macMAq: '',
        ipMaq: '',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Maquinas', null, {});
  }
};
