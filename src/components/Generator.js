import React from "react";

const URL = "https://api.whatsapp.com/send?phone=";

const fixedEncodeURIComponent = (str) => {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16);
  });
};

const Generator = ({ setLink }) => {
  const [message, setMessage] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const generateLink = () => {
    const encodedMessage = fixedEncodeURIComponent(message);
    setLink(URL + phoneNumber + "&text=" + encodedMessage);
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
      <button onClick={generateLink}>Generate Link</button>
    </div>
  );
};

export default Generator;
