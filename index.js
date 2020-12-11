const fs = require('fs');
const path = require('path');

const readContents = (filePath) => fs.readFileSync(filePath)
  .toString()
  .toLowerCase()
  .trim()
  .split('\n')
  .map(line => line.trim())
  .filter(line => !!line);

const contents = readContents(path.join(__dirname, 'emails.txt'));

const emailBurnerList = new Set(contents);

const isEmailBurner = function (email) {

  const atoms = email.toString().split('@');

  const domain = atoms[1];

  if (!domain) {
    throw new Error('invalid email');
  }

  return emailBurnerList.has(domain.toLowerCase())
};

module.exports = { emailBurnerList, isEmailBurner };
