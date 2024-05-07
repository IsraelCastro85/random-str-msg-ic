const messages = [
    "Paquete 1",
    "Commit committed",
    "Sentencia 2",
    "COMMIT ALL THE FILES!",
    "Oracion 3",
    "Lock S-foils in attack position",
    "Enunciado 4",
    "I'll explain when you're older!",
    "Linea 5",
    "Reinventing the wheel. Again.",
    "Hay que realizar el commit",
    "Batman! (this commit has no parents)",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };