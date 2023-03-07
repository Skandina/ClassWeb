`use strict`;
const tbody = document.querySelector("tobody");

const contents = [
  {
    level: "Beginner",
    title: "Korean food recipe",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Intermediate",
    title: "recipe2",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Advanced",
    title: "recipe3",
    date: "2023-05-20",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "Korean food recipe2",
    date: "2023-06-15",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

// 날짜 형식 변환해서 넣기
// const currentMonth = new Date();
// const months = [
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
// console.log(months[currentMonth.getMonth()]);
const docFragment = new DocumentFragment();
const cardHtml = document.querySelector("#card-wrap");

const filterBeginner = contents
  .filter((x) => x.level === "Beginner")
  .map((content) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "mb-3");
    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");
    cardImg.src = `img/${content.image}`;
    cardDiv.appendChild(cardImg);

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = content.title;
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = content.detail;
    const cardDate = document.createElement("p");
    cardDate.classList.add("card-text", "date");
    cardDate.textContent = content.date;
    // date format 필요

    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardDate);

    cardDiv.appendChild(cardBodyDiv);
    docFragment.append(cardDiv);
  });
cardHtml.appendChild(docFragment);
