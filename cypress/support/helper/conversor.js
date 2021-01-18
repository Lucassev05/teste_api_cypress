const extenso = require("extenso");
const extensoEn = require("number-to-text");
require("number-to-text/converters/en-us");

const converter = (value, language = "pt") => {
  if (language === "en") {
    const numeroNegativo = Math.sign(value);
    if (numeroNegativo == -1) {
      return "minus " + extensoEn.convertToText(value, { case: "lowerCase" });
    }
    return extensoEn.convertToText(value, { case: "lowerCase" });
  } else {
    return extenso(value, { negative: "informal" });
  }
};

export default { converter };
