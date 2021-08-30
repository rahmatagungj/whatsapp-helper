import React from "react";

const URL = "https://api.whatsapp.com/send?phone=";

const fixedEncodeURIComponent = (str) => {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16);
  });
};

const Generator = ({ link, setLink }) => {
  const [message, setMessage] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const generateLink = () => {
    const encodedMessage = fixedEncodeURIComponent(message);
    setLink(URL + phoneNumber + "&text=" + encodedMessage);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <div className="generator">
      <input
        className="phone space"
        type="text"
        name="phone"
        id="phone"
        placeholder="Masukan nomor handphone"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <textarea
        className="message space"
        cols="30"
        rows="10"
        type="text"
        placeholder="Masukan pesan"
        name="message"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="text"
        name="result"
        id="result"
        className="result space"
        value={link}
        placeholder="Hasil"
        disabled
      />
      <button onClick={generateLink}>Buat Tautan</button>
      {link && <button onClick={copyLink}>Salin Tautan</button>}
    </div>
  );
};

export default Generator;
