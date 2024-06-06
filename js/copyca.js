function copyToClipboard() {
  var copyText = document.querySelector(".ca-data").getAttribute("cavalue");

  // Check if navigator.clipboard is supported
  if (navigator.clipboard) {
    navigator.clipboard.writeText(copyText).then(
      function () {
        var copyBtn = document.querySelector(".copyBtn");
        copyBtn.innerHTML = '<div class="circle">100%</div> Copied';
        setTimeout(function () {
          copyBtn.innerHTML = '<div class="circle">100%</div> Copy CA';
        }, 2000);
      },
      function (err) {
        console.error("Error copying text: ", err);
      }
    );
  } else {
    // Create a hidden input field
    var input = document.createElement("input");
    input.style.position = "absolute";
    input.style.left = "-9999px";
    document.body.appendChild(input);

    // Set the input value and select it
    input.value = copyText;
    input.select();

    // Use document.execCommand to copy the text
    try {
      var result = document.execCommand("copy");
      var copyBtn = document.querySelector(".copyBtn");
      copyBtn.innerHTML = '<div class="circle">100%</div> Success Copy &nbsp;';
      setTimeout(function () {
        copyBtn.innerHTML = '<div class="circle">100%</div> Copy CA &nbsp;';
      }, 2000);
    } catch (err) {
      console.error("Error copying text: ", err);
    }

    // Remove the input field
    document.body.removeChild(input);
  }
}
