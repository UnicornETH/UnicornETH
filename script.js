document.addEventListener("DOMContentLoaded", function () {
  const contractAddress = document.getElementById("contract-address");
  contractAddress.addEventListener("click", function () {
    copyToClipboard(contractAddress.textContent);
    alert(
      "Contract address copied to clipboard: " + contractAddress.textContent
    );
  });

  function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
});
