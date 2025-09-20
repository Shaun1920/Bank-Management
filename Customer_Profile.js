document.addEventListener("DOMContentLoaded", () => {
  const aadharField = document.getElementById("aadhar");
  const panField = document.getElementById("pan");

  // Aadhar validation (exactly 12 digits)
  aadharField.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, ""); // only numbers allowed
    if (this.value.length !== 12) {
      this.setCustomValidity("Aadhar must be exactly 12 digits");
    } else {
      this.setCustomValidity("");
    }
  });

  // PAN validation (exactly 10 alphanumeric)
  panField.addEventListener("input", function () {
    this.value = this.value.replace(/[^A-Za-z0-9]/g, ""); // only letters + numbers
    if (this.value.length !== 10) {
      this.setCustomValidity("PAN must be exactly 10 characters (letters & numbers only)");
    } else {
      this.setCustomValidity("");
    }
  });
});

    // Function to mask inputs (show first 4 digits, rest as X)
    function maskInput(input) {
      let val = input.value;
      if (val.length > 4) {
        let visible = val.substring(0, 4);
        let hidden = "X".repeat(val.length - 4);
        input.value = visible + hidden;
      }
    }

    // Function to mask inputs (show first 4 digits, rest as X)
function maskValue(val) {
  if (val.length > 4) {
    let visible = val.substring(0, 4);
    let hidden = "X".repeat(val.length - 4);
    return visible + hidden;
  }
  return val;
}


    function submitForm() {
      alert("Details Saved!");
      document.querySelector(".edit-btn").style.display = "inline-block";
      document.querySelector(".cancel-btn").style.display = "inline-block";
      document.querySelector(".submit-btn").style.display = "none";

      document.querySelectorAll("input, textarea").forEach(el => el.disabled = true);
    }

    function enableEdit() {
      document.querySelectorAll("input, textarea").forEach(el => el.disabled = false);
      document.querySelector(".submit-btn").style.display = "inline-block";
      document.querySelector(".edit-btn").style.display = "none";
      document.querySelector(".cancel-btn").style.display = "inline-block";
    }

    function cancelEdit() {
      document.querySelectorAll("input, textarea").forEach(el => el.disabled = true);
      document.querySelector(".submit-btn").style.display = "none";
      document.querySelector(".edit-btn").style.display = "inline-block";
      document.querySelector(".cancel-btn").style.display = "none";
    }
  

document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    // Auto-fill profile fields
    document.querySelector('input[maxlength="7"]').value = (loggedInUser.ssn);
    document.querySelector('input[maxlength="50"]').value = loggedInUser.fname + " " + loggedInUser.lname;
    document.querySelector('input[type="email"]').value = loggedInUser.email;
    document.querySelector('#contact').value = (loggedInUser.contact);
    document.querySelector('#account').value = maskValue(loggedInUser.accountNo);
    document.querySelector('textarea').value = loggedInUser.address;

    // Disable inputs initially
    document.querySelectorAll("input, textarea").forEach(el => el.disabled = true);
  }
});
