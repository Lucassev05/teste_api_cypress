const faker = require("faker");
const { converter } = require("../helper/conversor");

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
    extensoPt: converter("-10000"),
    extensoEn: "minus ten thousands",
  },
  {
    numero: "-9999",
    extensoPt: converter("-9999"),
    extensoEn: "minus nine thousand, nine hundred and ninety-nine",
  },
  {
    numero: "0001",
    extensoPt: converter("0001"),
    extensoEn: "one",
  },
  { numero: "5", extensoPt: converter("5"), extensoEn: "five" },
  {
    numero: "9999",
    extensoPt: converter("9999"),
    extensoEn: "nine thousand, nine hundred and ninety-nine",
  },
  {
    numero: "10000",
    extensoPt: converter("10000"),
    extensoEn: "ten thousand",
  },
];

const metodos = ["POST", "DELETE", "PUT"];

export default { elementosInvalidos, elementosValidos, metodos };
