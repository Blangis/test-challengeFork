
function isValidDNA(str) {
    // Para verificar si la cadena está vacía
    if (str === "") {
      return false;
    }
  
    // Verificar si la cadena contiene solo bases de ADN canónicas en mayúsculas
    return /^[CTAG]+$/.test(str);
};
  
  // Ejemplos de uso:
  /* 
  `/^[CTAG]+$/`
  ´^`: Coincide con el inicio de la cadena.
  `[CTAG]`: Es una clase de caracteres que coincide con cualquier carácter que sea 'C', 'T', 'A' o 'G'.
  `+`: Indica que la clase de caracteres [CTAG] puede aparecer una o más veces en la cadena.
  `$`: Coincide con el final de la cadena
  
  
  console.log(isValidDNA("CTAG")); // should return true
  console.log(isValidDNA("CTXG")); // should return false due to 'X'
  console.log(isValidDNA("ctag")); // should return false due to lowercase
  console.log(isValidDNA("")); // should return false for empty string
  */
  

module.exports = {isValidDNA}