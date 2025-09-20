
    // ==========================
    // Live Field Validations
    // ==========================
    document.addEventListener("DOMContentLoaded", () => {
      const nameRegex = /^[A-Za-z]+$/;
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{6,30}$/;
      const phoneRegex = /^[789][0-9]{9}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // First Name
      document.getElementById("fname").addEventListener("input", function () {
        if (!nameRegex.test(this.value)) {
          this.setCustomValidity("Only alphabets allowed, no spaces or numbers");
        } else {
          this.setCustomValidity("");
        }
      });

      // Last Name
      document.getElementById("lname").addEventListener("input", function () {
        if (!nameRegex.test(this.value)) {
          this.setCustomValidity("Only alphabets allowed, no spaces or numbers");
        } else {
          this.setCustomValidity("");
        }
      });

      // Email
      document.getElementById("email").addEventListener("input", function () {
        if (!emailRegex.test(this.value)) {
          this.setCustomValidity("Enter a valid email (e.g., abc@gmail.com)");
        } else {
          this.setCustomValidity("");
        }
      });

      // Password
      document.getElementById("password").addEventListener("input", function () {
        if (!passwordRegex.test(this.value)) {
          this.setCustomValidity("Password must include letters, numbers, special character, 6–30 chars");
        } else {
          this.setCustomValidity("");
        }
      });

      // Confirm Password
      document.getElementById("confirmPassword").addEventListener("input", function () {
        const pwd = document.getElementById("password").value;
        if (pwd !== this.value) {
          this.setCustomValidity("Passwords do not match");
        } else {
          this.setCustomValidity("");
        }
      });

      // Contact
      document.getElementById("contact").addEventListener("input", function () {
        if (!phoneRegex.test(this.value)) {
          this.setCustomValidity("Must be 10 digits, start with 7/8/9");
        } else {
          this.setCustomValidity("");
        }
      });

      // Form submission handlers
      document.getElementById("signupForm").addEventListener("submit", function(e) {
        e.preventDefault();
        register();
      });

      document.getElementById("loginFormInner").addEventListener("submit", function(e) {
        e.preventDefault();
        login();
      });
    });

    // ==========================
    // Registration
    // ==========================
    function register() {
      const fname = document.getElementById("fname").value.trim();
      const lname = document.getElementById("lname").value.trim();
      const email = document.getElementById("email").value.trim();
      const pwd = document.getElementById("password").value;
      const cpwd = document.getElementById("confirmPassword").value;
      const address = document.getElementById("address").value.trim();
      const contact = document.getElementById("contact").value.trim();

      if (pwd !== cpwd) {
        alert("Passwords do not match!");
        return;
      }

      // Generate SSN (7-digit) & Account No (12-digit)
      const generatedSSN = Math.floor(1000000 + Math.random() * 9000000);
      const generatedAccount = Math.floor(100000000000 + Math.random() * 900000000000);

      const user = {
        ssn: generatedSSN,
        accountNo: generatedAccount,
        fname,
        lname,
        email,
        password: pwd,
        address,
        contact,
      };

      let users = JSON.parse(localStorage.getItem("customers")) || [];
      users.push(user);
      localStorage.setItem("customers", JSON.stringify(users));

      alert(
        "Registration Successful!\nYour SSN ID: " +
          generatedSSN +
          "\nYour Account No: " +
          generatedAccount
      );

      // Switch to login page
      document.getElementById("registrationForm").classList.add("hidden");
      document.getElementById("loginForm").classList.remove("hidden");

      // Pre-fill SSN in login
      document.getElementById("loginSSN").value = generatedSSN;
    }

    // ==========================
    // Navigation
    // ==========================
    function gotoLogin() {
      document.getElementById("registrationForm").classList.add("hidden");
      document.getElementById("loginForm").classList.remove("hidden");
    }

    function gotoRegister() {
      document.getElementById("loginForm").classList.add("hidden");
      document.getElementById("registrationForm").classList.remove("hidden");
    }

    // ==========================
    // Login
    // ==========================
    function login() {
      const ssn = document.getElementById("loginSSN").value.trim();
      const pwd = document.getElementById("loginPassword").value;

      let users = JSON.parse(localStorage.getItem("customers")) || [];
      let foundUser = users.find((u) => u.ssn == ssn && u.password === pwd);

      if (foundUser) {
        alert(
          "Login Successful! Welcome " +
            foundUser.fname +
            " " +
            foundUser.lname +
            "\nAccount No: " +
            foundUser.accountNo
        );

        // Save logged in user
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

        // Redirect to profile page
        window.location.href = "customer_profile.html";
      } else {
        alert("Invalid SSN or Password.");
      }
    }