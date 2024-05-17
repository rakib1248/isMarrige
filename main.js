// const date = new Date();

// const monthList = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// console.log(`
// ${date.getDate()}.${monthList[date.getMonth()]}.${date.getFullYear()}
// ${
//   date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
// }:${date.getMinutes()}:${date.getUTCSeconds()}:${
//   date.getHours() > 12 ? "PM" : "AM"
// }

// `);

// document.querySelectorAll("ul li").forEach((item, index) => {
//   if (index % 2 == 0) {
//     item.style.color = "red";
//   } else {
//     item.style.color = "blue";
//   }
// });
const Name = document.querySelector(
  '.box input[placeholder="Enter Your Name"]'
);

const age = document.querySelector(
  '.box input[placeholder="Enter Your Birth Year"]'
);

const btn = document.querySelector(".box button");
const p_teg = document.querySelector(".box p");

age.addEventListener("input", function (e) {
  const target = e.target;
  const value = target.value;
  if (isNaN(value)) {
    target.value = "";
    return;
  } 
});

// condition
btn.addEventListener("click", () => {
  if (!Name.value && !age.value) {
    p_teg.innerHTML = "Apnar Name And Brithday Year den Age";
  } else {
    let Age = new Date().getFullYear() - Number(age.value);
    if (Age >= 21) {
      p_teg.innerHTML = `
         <img src="https://nerdramblesblog.wordpress.com/wp-content/uploads/2020/11/original.gif" alt=""> <br>
         Hello, ${Name.value}, <br>
         Apnar Boyosh = ${Age} <br>
         apni biyer Jonno Prostuth`;
    } else {
      p_teg.innerHTML = `
      <img src="https://media1.giphy.com/media/4pk6ba2LUEMi4/giphy.gif" alt=""> <br>
      Hello, ${Name.value}, <br>
      Apnar Boyosh = ${Age} <br>
      apni biyer Jonno Prostuth naa`;
    }
  }
});
