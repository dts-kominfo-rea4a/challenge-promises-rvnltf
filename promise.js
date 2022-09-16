const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (q) => {
  try {
    const IXX = await promiseTheaterIXX();
    const VGC = await promiseTheaterVGC();

    const data = [...IXX, ...VGC];

    return data.filter((v) => v.hasil == q).length;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  promiseOutput,
};
