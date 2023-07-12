import React from "react";
import QrCodeReader, { QRCode } from "react-qrcode-reader";

const QRcode = () => {
  return (
    <div>
      <>
        <QrCodeReader
          delay={100}
          width={600}
          height={500}
          action={(data) => {
            console.log(data);
          }}
        />
      </>
    </div>
  );
};

export default QRcode;
