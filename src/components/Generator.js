import React from "react";
import { toast } from "react-toastify";

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
    navigator.clipboard.writeText(link);
    toast.info("Tautan berhasil dibuat dan disalin pada clipboard.", {
      position: "top-center",
      autoClose: 3000,
      autoClose: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const copyLink = () => {
    navigator.clipboard.writeText(link);
  };

  React.useEffect(() => {
    if (link) setLink(null);
  }, [message, phoneNumber]);

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
      {link && (
        <input
          type="text"
          name="result"
          id="result"
          className="result space"
          value={link}
          placeholder="Hasil"
          disabled
        />
      )}
      <button onClick={generateLink}>Buat Tautan</button>
    </div>
  );
};

export default Generator;
