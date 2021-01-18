const faker = require("faker");

const elementosInvalidos = [
  `-${faker.random.number({ min: 10002 })}`,
  "-10001",
  "10001",
  faker.random.number({ min: 10002 }),
  "string",
  "10,1",
  " ",
];

const elementosValidos = [
  {
    numero: "-10000",
    extensoPt: "menos dez mil",
    extensoEn: "minus ten thousands",
  },
  {
    numero: "-9999",
    extensoPt: "menos nove mil novecentos e noventa e nove",
    extensoEn: "minus nine thousand, nine hundred and ninety-nine",
  },
  { numero: "0001", extensoPt: "um", extensoEn: "one" },
  { numero: "5", extensoPt: "cinco", extensoEn: "five" },
  {
    numero: "9999",
    extensoPt: "nove mil novecentos e noventa e nove",
    extensoEn: "nine thousand, nine hundred and ninety-nine",
  },
  { numero: "10000", extensoPt: "dez mil", extensoEn: "ten thousand" },
];

const metodos = ["POST", "DELETE", "PUT"];

export default { elementosInvalidos, elementosValidos, metodos };
