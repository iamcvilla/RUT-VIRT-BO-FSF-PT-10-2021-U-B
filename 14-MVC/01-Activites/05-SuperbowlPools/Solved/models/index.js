const User = require('./User');
const Box = require('./Box');
const Pool = require('./Pool');

Pool.hasMany(Box, {
  foreignKey: 'pool_id',
});

Box.belongsTo(Pool, {
  foreignKey: 'pool_id',
});

module.exports = { User, Box, Pool };
