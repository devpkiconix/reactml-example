const { codegenSpec } = require("@iconix/reactml");

module.exports = str => codegenSpec(str).promise();
// .then(code => {
//     console.log(`***************************
//         ${code}
//         !!!!!!!!!!!!!!!!!!!!!!!!`);
//     return code;
// })
// ;
