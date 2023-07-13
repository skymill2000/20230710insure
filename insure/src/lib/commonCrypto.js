const { createCipheriv, createHmac } = require("crypto");

const sha256Enc = (plainText) => {
  const secret = "abcdefgsadfklj";
  const hash = createHmac("sha256", secret).update(plainText).digest("base64");
  console.log(hash);
};

//H3uVnnOnNIXXsH63CsgswUsmICSCdVsn 키
//dwUgwmwOndnJOmOX IV
//!Kwic123테스트 원문
//b3Bu7QBZ0q96+f2GY2NQmaT1XnZElI1+wRdSHBOY01s= 암호화된 결과

sha256Enc("password");
sha256Enc("password");
sha256Enc("passwors");
