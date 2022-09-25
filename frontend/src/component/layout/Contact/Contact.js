import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:nabeel2021hassan@gmail.com">
        <Button>Contact: nabeel2021hassan@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
