`use strict`;

const contents = [
  {
    level: "Beginner",
    title: "Korean food recipe",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
    title: "recipe4",
    date: "2023-06-15",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "Korean food recipe",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
    title: "recipe4",
    date: "2023-06-15",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "Korean food recipe",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
    title: "recipe4",
    date: "2023-06-15",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const tabs = document.querySelectorAll("a.nav-link");
const tabAll = document.querySelector(".tab-all");
const tabBeginner = document.querySelector("a.tab-beginner");
const tabIntermediate = document.querySelector(".tab-intermediate");
const tabAdvanced = document.querySelector(".tab-advanced");
const ACTIVE_CLASSNAME = "active";

const docFragment = new DocumentFragment();
const cardHtml = document.querySelector("#card-box");

const search = document.querySelector(".search");

const pagination = document.querySelector(".container>nav");

// 첫 화면이 All인 경우, contents 다 보여주기
if (tabAll.classList.contains(ACTIVE_CLASSNAME)) {
  contents.map((content) => {
    createCard(content);
  });
  // renderPagination(contents.length, 1);
}

// tab 클릭 시 filter
function handleTabClick(e) {
  //// 먼저 있던 active class 삭제하기
  for (let tab of tabs) {
    if (tab.classList.contains(ACTIVE_CLASSNAME)) {
      tab.classList.remove(ACTIVE_CLASSNAME);
    }
  }

  //// 기존 데이터 삭제하기
  const cardHtmlChilds = document.querySelectorAll("#card-box div");
  if (cardHtml.hasChildNodes()) {
    for (let child of cardHtmlChilds) {
      child.remove();
    }
  }

  //// level별 데이터 보여주기
  const value = e.target.getAttribute("data-value");
  if (value === "Beginner") {
    contents
      .filter((x) => x.level === "Beginner")
      .map((content) => {
        createCard(content);
      });
    tabBeginner.classList.toggle(ACTIVE_CLASSNAME);
  } else if (value === "Intermediate") {
    contents
      .filter((x) => x.level === "Intermediate")
      .map((content) => {
        createCard(content);
      });
    tabIntermediate.classList.toggle(ACTIVE_CLASSNAME);
  } else if (value === "Advanced") {
    contents
      .filter((x) => x.level === "Advanced")
      .map((content) => {
        createCard(content);
      });
    tabAdvanced.classList.toggle(ACTIVE_CLASSNAME);
  } else if (value === "All") {
    contents.map((content) => {
      createCard(content);
    });
    tabAll.classList.toggle(ACTIVE_CLASSNAME);
  }
}

// card html 생성
function createCard(content) {
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
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formatDate = new Date(content.date);
  const month = months[formatDate.getMonth()];
  const date = formatDate.getDate();
  const year = formatDate.getFullYear();
  cardDate.textContent = `${month} ${date}, ${year}`;
  cardDate.classList.add("card-text", "date");

  cardBodyDiv.appendChild(cardTitle);
  cardBodyDiv.appendChild(cardText);
  cardBodyDiv.appendChild(cardDate);

  cardDiv.appendChild(cardBodyDiv);
  docFragment.append(cardDiv);
  cardHtml.appendChild(docFragment);
}

// search card
function searchCard(event) {
  const cards = cardHtml.childNodes;
  const searchValue = event.target.value.toLowerCase();
  for (let card of cards) {
    const arr = Array.from(card.children[1].children);

    // title이나 detail 중에서 search input 값이 포함되는 card 보여주기
    if (
      arr[0].innerText.toLowerCase().includes(searchValue) ||
      arr[1].innerText.toLowerCase().includes(searchValue)
    ) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  }
}

// card 클릭 시, contents detail show
const cardItems = document.querySelectorAll(".card");
const cardDetail = document.querySelector("#card-detail");
function showCardDetail(event) {
  console.log("card click");
  cardHtml.style.display = "none";
  pagination.style.display = "none";
  cardDetail.style.display = "block";
  // 클릭한 card 내용 채우기
  if (event.target.className === "card-img-top") {
    // title
    cardDetail.children[0].innerText =
      event.target.nextSibling.children[0].innerText;
    // date
    cardDetail.children[1].innerText =
      event.target.nextSibling.children[2].innerText;
    // img
    cardDetail.children[2].src = event.target.src;
    // detail
    cardDetail.children[3].innerText =
      event.target.nextSibling.children[1].innerText;
  } else if (event.target.parentElement.className === "card-body") {
    // title
    cardDetail.children[0].innerText =
      event.target.parentElement.children[0].innerText;
    // date
    cardDetail.children[1].innerText =
      event.target.parentElement.children[2].innerText;
    // img
    cardDetail.children[2].src = event.target.parentElement.previousSibling.src;
    // detail
    cardDetail.children[3].innerText =
      event.target.parentElement.children[1].innerText;
  } else if (event.target.className === "card-body") {
    // title
    cardDetail.children[0].innerText = event.target.children[0].innerText;
    // date
    cardDetail.children[1].innerText = event.target.children[2].innerText;
    // img
    cardDetail.children[2].src = event.target.previousSibling.src;
    // detail
    cardDetail.children[3].innerText = event.target.children[1].innerText;
  }
}
cardItems.forEach((e) => e.addEventListener("click", showCardDetail));

// pagination
function renderPagination(totalData, currentPage) {
  const dataPerPage = 5;
  const pageCount = 10;

  const totalPage = Math.ceil(totalData / dataPerPage);
  const pageGroup = Math.ceil(currentPage / pageCount);

  let last = pageGroup * pageCount;
  console.log("last", last);
  if (last > totalPage) last = totalPage;
  let first = last - (pageCount - 1);
  const next = last + 1;
  const prev = first - 1;

  if (totalPage < 1) first = last;
  const pages = document.querySelector(".pagination");
  console.log("first", first);
  if (first > 10) {
    pages.insertAdjacentHTML(
      "afterbegin",
      `<li class='page-item'><a onclick='getTarget(${prev})' class="page-link" aria-label="Previous"'><span aria-hidden="true">&laquo;</span></a></li>`
    );
  }
  for (let i = first; i <= last; i++) {
    if (currentPage === i) {
      pages.insertAdjacentHTML(
        "beforeend",
        `<li class='active page-item'><a onclick='getTarget(${i})' class='page-link'>${i}</a></li>`
      );
    } else if (i > 0) {
      pages.insertAdjacentHTML(
        "beforeend",
        `<li class='page-item'><a onclick='getTarget(${i})' class='page-link'>${i}</a></li>`
      );
    }
  }
  if (next > 10 && next < totalPage) {
    pages.insertAdjacentHTML(
      "beforeend",
      `<li class='page-item'><a onclick='getTarget(${next})' class="page-link" aria-label="Next"'><span aria-hidden="true">&raquo;</span></a></li>`
    );
  }
}
renderPagination(150, 1);
