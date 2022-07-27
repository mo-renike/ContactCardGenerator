let telInput = document.querySelector("#tel");
let telDisplay = document.querySelector("#display");
let error = document.querySelector("#tel_error");
let img = document.querySelector("#img");
let username = document.querySelector("#username");
// document.querySelector("#date").innerHTML = new Date().toLocaleString();
const mtn_pref = [
  0703, 0706, 0803, 0806, 0810, 0813, 0814, 0816, 0903, 0906, 0913,
];
const etisalat_pref = [0809, 0817, 0818, 0908, 0909];
const glo_pref = [0805, 0807, 0811, 0705, 0815, 0905];
const airtel_pref = [0802, 0808, 0812, 0701, 0902, 0907, 0901, 0708];
const ntel_pref = [0804];
const smile_pref = [0702];

//get img file
function previewFile() {
  const preview = document.querySelector("#display_img");
  const file = document.querySelector("#file-selector").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      preview.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}

//flip card
document.querySelector("#modal").addEventListener("click", () => {
  document.querySelector(".back").classList.toggle("flipped");
});
//card modal
document.getElementById("submit").addEventListener("click", () => {
  if (!username.value ) {
    alert("Input all fields");
  } else {
    document.querySelector(".wrapper").style.display = "none";
    document.querySelector("#modal").style.display = "block";
    document.querySelector("#display_name").innerHTML = username.value
    document.querySelector("#display_tel").innerHTML = telInput.value
  }
});
document.getElementById("close").addEventListener("click", () => {
  document.querySelector(".wrapper").style.display = "flex";
  document.querySelector("#modal").style.display = "none";
});

//check if input is not a number
const validate = () => {
  error.innerHTML = "";
  if (isNaN(telInput.value)) {
    error.innerHTML = "Only Numbers are allowed";
  } //if the first number is not 0
  else if (telInput.value.charAt(0) !== "0") {
    error.innerHTML = "Number must start with 0";
  } else if (telInput.value.length < 4 || telInput.value.length > 11) {
    error.innerHTML = "Number must be between 4 and 11 digits";
  } else {
    error.innerHTML = "";
  }
};

const checkPrefix = () => {
  let phone = `0${~~telInput.value.slice(0, 4)}`;
  phoneNo = Number(phone);

  if (mtn_pref.includes(phoneNo)) {
    telDisplay.innerHTML = "Your Number is an MTN Number";
    telDisplay.style.color = "#ffcb01";
    img.src = "./img/MTN.svg";
  } else if (etisalat_pref.includes(phoneNo)) {
    telDisplay.innerHTML = "Your Number is an Etisalat Number";
    telDisplay.style.color = "#016e53";
    img.src = "./img/9mobile.svg";
  } else if (glo_pref.includes(phoneNo)) {
    telDisplay.innerHTML = "Your Number is a Glo Number";
    telDisplay.style.color = "10a507";
    img.src = "./img/Glo.png";
  } else if (airtel_pref.includes(phoneNo)) {
    telDisplay.innerHTML = "Your Number is an Airtel Number";
    telDisplay.style.color = "#ed1d24";
    img.src = "./img/Airtel.png";
  } else if (ntel_pref.includes(phoneNo)) {
    telDisplay.innerHTML = "Your Number is an Ntel Number";
    telDisplay.style.color = "#8acfb2";
    img.src = "./img/ntel.png";
  } else if (smile_pref.includes(phoneNo)) {
    telDisplay.innerHTML = "Your Number is a Smile Number";
    telDisplay.style.color = "#8acfb2";
    img.src = "./img/smile.png";
  } else {
    telDisplay.innerHTML = "";
    img.src = "";
  }
};

telInput.addEventListener("input", () => {
  validate();
  checkPrefix();
});

`  <h2>Contact Card</h2>
<div class="modal_dets">
  <div class="d-grid">
    <div class="profile_img">
      <img src="./img/bg.jpg" id="dp" />
    </div>
    <div id="details">
      <p>Name:</p>
      <p>Phone Number:</p>
      <p>Network Provider:</p>
    </div>
  </div>
</div>
<div class="footer">
  <h4 style="padding-left: 10px">Click to flip!</h4>
  <a rel="nofollow" href="http://" border="0" style="cursor: default"
    ><img
      src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fmo-renike.github.io%2Fportfolio-page%2F&chs=180x180&choe=UTF-8&chld=L|2"
      alt=""
  /></a>
</div>`;
