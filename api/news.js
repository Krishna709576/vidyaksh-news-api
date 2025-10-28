const Parser = require('rss-parser');
const parser = new Parser();

module.exports = async (req, res) => {
  res.status(200).json({ message: "API working!" });
};
