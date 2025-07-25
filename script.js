document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const navList = document.querySelector(".header-small-device .nav-list");

  // Toggle menu on icon click
  menuIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    navList.style.marginLeft =
      navList.style.marginLeft === "0px" ? "-9999999px" : "0px";
  });

  // Close menu when clicking anywhere else
  document.addEventListener("click", function () {
    navList.style.marginLeft = "-9999999px";
  });

  // Close menu when clicking any nav item
  const navItems = navList.querySelectorAll("li a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navList.style.marginLeft = "-9999999px";
    });
  });
  // Active nav li
  const navliList = document.querySelectorAll("li");
  navliList.forEach((item) => {
    item.addEventListener("click", function () {
      // remove previous defalut active class
      navliList.forEach((nav) => nav.classList.remove("active-nav"));
      // add new active class
      item.classList.add("active-nav");
    });
  });
});

let bmiStatus = "";
let health = "";
const bmiValue = document.getElementById("bmiValue");
const bmiStatusText = document.getElementById("bmiStatus");
const healthText = document.getElementById("health");
const submit = document.getElementById("submitButton");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const age = document.getElementById("age").value;
  const sex = document.getElementById("sex").value;
  const heightInMeter = height / 100;
  const bmi = parseFloat((weight / (heightInMeter * heightInMeter)).toFixed(2));

  if (bmi <= 18.5) {
    health =
      "Increase calorie intake with nutritious foods; consult a doctor for possible deficiencies.";
    bmiStatus = "Underweight";
  }
  if (bmi > 18.5 && bmi <= 24.9) {
    health = "Maintain a balanced diet and regular exercise.";
    bmiStatus = "Healthy";
  }
  if (bmi >= 25 && bmi <= 29.9) {
    health =
      "Focus on portion control, regular physical activity, and reducing processed foods.";
    bmiStatus = "Overweight";
  }
  if (bmi >= 30) {
    health =
      "Adopt a weight loss plan with medical guidance; prioritize whole foods and regular workouts.";
    bmiStatus = "Obesity";
  }
  bmiValue.innerHTML = bmi;
  bmiStatusText.innerHTML = bmiStatus;
  healthText.innerHTML = health;
  console.log("status: ", bmiStatus, "Health: ", health, "BMI: ", bmi);
});
