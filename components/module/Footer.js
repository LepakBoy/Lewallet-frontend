import React from "react";

export default function Footer() {
  return (
    <footer className="footer py-4">
      <div className="footer-wrapper mx-auto d-flex justify-content-between">
        <div className="copyright">2021 Lewallet. All right reserved.</div>
        <div className="footer-contact d-flex">
          <div className="footer-phone pe-4 me-4">+62 5637 8882 9901</div>
          <div className="footer-email">contact@zwallet.com</div>
        </div>
      </div>
    </footer>
  );
}
