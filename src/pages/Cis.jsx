import React from "react";
import reactLogo from "../assets/wlogo.svg";
import "../App.css";

const Cis = () => {
  return (
    <>
      <div className="card">
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h2>World Bank Group Global Development</h2>
      </div>
      <div>
        {/* <h1>Data Comming soon....!</h1> */}
        <samp>
          <h2>World Bank IFC Verify Client Information Sheet (CIS)</h2>
          <p>Date : </p>
          <p>
            <b>
              <u>CLIENT INFORMATION</u>
            </b>
          </p>
          <p>Client / Singatory Name :</p>
          <p>Nationality : </p>
          <p>Passport Number :</p>
          <p>Date of Issue : </p>
          <p>Expiration Date : </p>
          <p>Date of Birth :</p>
          <p>Place of Birth :</p>
          <p>
            <b>
              <u>HOME INFORMATION</u>
            </b>
          </p>
          <p className="p">Street Address :</p>
          <p className="p">City / State / Zip :</p>
          <p className="p">Country :</p>
          <p className="p">Telephone :</p>
          <p className="p">Email :</p>
          <p className="p">
            <b>
              <u>BANK INFORMATION</u>
            </b>
          </p>
          <p>Name of Bank :</p>
          <p>Street Address :</p>
          <p>City / State / Zip :</p>
          <p>Telephone :</p>
          <p>S.W.I.F.T Code : </p>
          <p>Account Name : </p>
          <p>Account Number :</p>
          <p>
            Electronic or Facsimile transmission of this document any other
            associated document are as valid as the original. Hard copies shall
            be delivered if requested. I hereby swear under penalty of perjury,
            that the infornation provided hare is accurate and true.
          </p>
        </samp>
      </div>

      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}
        <p></p>
      </div>
      <p className="read-the-docs">
        Copyright © 2024 World Bank IFC - All Rights Reserved.
      </p>
    </>
  );
};

export default Cis;
