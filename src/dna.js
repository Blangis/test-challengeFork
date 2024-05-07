
function isValidDNA(str) {
    // Verificar si la cadena está vacía
    if (str === "") {
      return false;
    }
  
    // Verificar si la cadena contiene solo bases de ADN canónicas en mayúsculas
    return /^[CTAG]+$/.test(str);
};
  
  // Ejemplos de uso:
  /* console.log(isValidDNA("CTAG")); // should return true
  console.log(isValidDNA("CTXG")); // should return false due to 'X'
  console.log(isValidDNA("ctag")); // should return false due to lowercase
  console.log(isValidDNA("")); // should return false for empty string
  */
  

moduledule.exports = {isValidDNA}