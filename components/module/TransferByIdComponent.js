import React, { useState } from "react";
import Image from "next/image";
import ImageUser from "assets/img/1.png";
import Pencil from "assets/logo/pencil.png";

export default function TransferByIdComponent() {
  return (
    <div className="transfer-content w-100 ms-3 ms-2 p-4">
      <div className="transfer-header">
        <div className="transfer-title">Transfer Money</div>
      </div>
      <div className="detail-reciever-byid d-flex mt-4 ps-3">
        <Image
          className="detail-reciever-image"
          src={ImageUser}
          alt="history-img"
        />
        <div className="detail-reciever ms-3 pt-2">
          <div className="transfer-detail-name">Samuel Suhi</div>
          <div className="transfer-detail-phone">+62 813-8492-9994</div>
        </div>
      </div>
      <div className="tranfer-instructure mt-5">
        <span className="transfer-intructure-text">
          Type the amount you want to transfer and then press continue to the
          next steps.
        </span>
      </div>
      <div className="transfer-detail-input w-75 mx-auto mt-5 text-center">
        <input
          type="number"
          className="input-amount-transfer mx-auto h-100 w-50 text-center"
          placeholder="0.00"
        />
        <div className="balance-amount-availabel mt-4">
          <span className="balance-available">Rp.120.000 Available</span>
        </div>
        <div className="input-note-transfer mt-4 w-75 mx-auto">
          <Image src={Pencil} alt="pencil" />
          <input
            type="text"
            placeholder="Input some notes "
            className="transfer-input-notes w-75"
          />
        </div>
        <div className="button-continue mt-5 text-end">
          <button className="button-continue-transfer px-4 py-2 border-0">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
