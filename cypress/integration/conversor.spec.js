import Assert from "../support/helper/asserts";
import { request } from "../support/helper/request";
import Data from "../support/data/conversor";

context("Validação de Conversor de Decimal", () => {
  // Validação de dados inválidos no idioma português
  for (const value of Data.elementosInvalidos) {
    it(`Valores impossíveis de converter: ${value}`, () => {
      request(`${value}`);
      Assert.bodyandStatus("@request", "Invalid data");
    });
  }
  // Validação de dados inválidos no idioma inglês
  for (const value of Data.elementosInvalidos) {
    it(`Valores impossíveis de converter em inglês: ${value}`, () => {
      request(`en/${value}`);
      Assert.bodyandStatus("@request", "Invalid data", "en");
    });
  }
  // Validação de dados válidos no idioma português
  for (const elemento of Data.elementosValidos) {
    it(`Valores possíveis de converter em português: ${elemento.numero}`, () => {
      request(`${elemento.numero}`);
      Assert.bodyandStatus("@request", `${elemento.extensoPt}`);
    });
  }
  // Validação de dados válidos no idioma inglês
  for (const elemento of Data.elementosValidos) {
    it(`Valores possíveis de converter em inglês: ${elemento.numero}`, () => {
      request(`en/${elemento.numero}`);
      Assert.bodyandStatus("@request", `${elemento.extensoEn}`, "en");
    });
  }
  // Validação de métodos em português
  for (const metodo of Data.metodos) {
    it(`Métodos não permitidos do endpoint em português: ${metodo}`, () => {
      request("1", metodo);
      Assert.methodNotAllowed("@request", "Method Not Allowed");
    });
  }
  // Validação de métodos em inglês
  for (const metodo of Data.metodos) {
    it(`Métodos não permitidos do endpoint em inglês: ${metodo}`, () => {
      request("en/1", metodo);
      Assert.methodNotAllowed("@request", "Method Not Allowed");
    });
  }
});
