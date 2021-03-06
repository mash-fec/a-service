const sampleData = require('./sampleData.js');
const db = require('./index.js');

function seedDb() {
  sampleData.homes.forEach((singleHomeUrl) => {
    const oneHome = db.assignUrl(singleHomeUrl);
    db.saveHome(oneHome);
  });
}

seedDb();

module.exports = seedDb;
