const { createCipheriv, createHmac } = require("crypto");

const sha256Enc = (plainText) => {
  const secret = "abcdefgsadfklj";
  const hash = createHmac("sha256", secret).update(plainText).digest("base64");
  console.log(hash);
};

const AESEncrypt = (plainTxt) => {
  const algorithm = "aes-256-cbc";
  const key = "H3uVnnOnNIXXsH63CsgswUsmICSCdVsn";
  const iv = "dwUgwmwOndnJOmOX";
  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(plainTxt, "utf8", "base64");
  encrypted += cipher.final("base64");
  console.log(encrypted);
  console.log("b3Bu7QBZ0q96+f2GY2NQmaT1XnZElI1+wRdSHBOY01s=" === encrypted);
};

AESEncrypt("!Kwic123테스트");

//H3uVnnOnNIXXsH63CsgswUsmICSCdVsn 키
//dwUgwmwOndnJOmOX IV
//!Kwic123테스트 원문
//b3Bu7QBZ0q96+f2GY2NQmaT1XnZElI1+wRdSHBOY01s= 암호화된 결과

// sha256Enc("!Kwic123테스트");

// sha256Enc("password");
// sha256Enc("passwors");

const dbInsureEncrypt = () => {
  const timeSt = "";
  const appSecretKey = "";
  const serial = timeSt + appSecretKey;
  let secureKey = rpad(serial, 32, "0");
  var bytes = crypto.randomBytes(20);
  let iv = crypto.randomBytes(16);
  console.log(bytes);
  const key = crypto.pbkdf2Sync(secureKey, bytes, 70000, 32, "sha1");
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  cipher.setAutoPadding(false);
  console.log("b:", bytes.toString("base64"));
  console.log("iv:", iv.toString("base64"));
  let encrypted = cipher.update(pkcs7Pad(ssnnum), "utf8", "base64");
  encrypted += cipher.final("base64");
  console.log("here :", encrypted);
  var encBuf = Buffer.from(encrypted, "base64");
  let arr = [bytes, iv, encBuf];
  let conBuf = Buffer.concat(arr);
  console.log(conBuf.toString("base64"));
  // encrypted += conBuf.toString('base64');
  console.log(encrypted);
  return conBuf.toString("base64");
};
