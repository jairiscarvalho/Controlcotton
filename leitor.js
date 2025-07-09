function iniciarLeitor() {
  const leitorDiv = document.getElementById("leitor-qr");
  leitorDiv.style.display = "block";

  const html5QrCode = new Html5Qrcode("leitor-qr");

  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    qr => {
      document.getElementById("codigo").value = qr;
      html5QrCode.stop();
      leitorDiv.style.display = "none";
    }
  );
}
