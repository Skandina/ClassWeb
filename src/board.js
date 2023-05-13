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
    title: "recipe5",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Intermediate",
    title: "recipe6",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Advanced",
    title: "recipe7",
    date: "2023-05-20",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "recipe8",
    date: "2023-06-15",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "recipe9",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Intermediate",
    title: "recipe10",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Advanced",
    title: "recipe11",
    date: "2023-05-20",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "recipe12",
    date: "2023-06-15",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "recipe13",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Intermediate",
    title: "recipe14",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Advanced",
    title: "recipe15",
    date: "2023-05-20",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "recipe16",
    date: "2023-06-15",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "recipe17",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Intermediate",
    title: "recipe18",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Advanced",
    title: "recipe19",
    date: "2023-05-20",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "recipe20",
    date: "2023-06-15",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "recipe21",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Intermediate",
    title: "recipe22",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Advanced",
    title: "recipe23",
    date: "2023-05-20",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "recipe24",
    date: "2023-06-15",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "recipe25",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Intermediate",
    title: "recipe26",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Advanced",
    title: "recipe27",
    date: "2023-05-20",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "recipe28",
    date: "2023-06-15",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "recipe29",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Intermediate",
    title: "recipe30",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Advanced",
    title: "recipe31",
    date: "2023-05-20",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "recipe32",
    date: "2023-06-15",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Beginner",
    title: "recipe33",
    date: "2023-03-06",
    image: "bibimbap.jpg",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    level: "Intermediate",
    title: "recipe34",
    date: "2023-03-06",
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
const borderTop = document.querySelector(".border-top");

const search = document.querySelector(".search");

const pagination = document.querySelector(".container>nav");

// 첫 화면이 All인 경우, contents 다 보여주기
// 페이지 당, content 5개씩 보여주기
let pageSize = 5;
let currentPage = 1;

if (tabAll.classList.contains(ACTIVE_CLASSNAME)) {
  renderContents(contents, currentPage);
  renderPagination(contents.length, currentPage);
}

function filterLevel(value) {
  let levelValue = contents.filter((x) => x.level === value);
  levelValue.map((content, index) => {
    let start = (currentPage - 1) * pageSize;
    let end = currentPage * pageSize;
    if (index >= start && index < end) createCard(content);
  });
  return levelValue.length;
}

function renderContents(contents, currentPage) {
  document.querySelectorAll("#card-box div").forEach((el) => el.remove());
  //// content level에 맞게 동작
  if (tabAll.classList.contains(ACTIVE_CLASSNAME)) {
    contents
      .filter((item, index) => {
        let start = (currentPage - 1) * pageSize;
        let end = currentPage * pageSize;
        if (index >= start && index < end) return true;
      })
      .map((content) => {
        createCard(content);
      });
    return contents.length;
  } else if (tabBeginner.classList.contains(ACTIVE_CLASSNAME)) {
    return filterLevel("Beginner");
  } else if (tabIntermediate.classList.contains(ACTIVE_CLASSNAME)) {
    return filterLevel("Intermediate");
  } else if (tabAdvanced.classList.contains(ACTIVE_CLASSNAME)) {
    return filterLevel("Advanced");
  }
}
// 페이지네이션 bottom number 클릭 시, 해당 페이지 데이터 보여주기
function getPage(pageNum = 1) {
  currentPage = pageNum;
  renderPagination(renderContents(contents, currentPage), currentPage);
}

// pagination
// 데이터 개수에 맞게 페이지네이션 그려내기
function renderPagination(totalData, currentPage) {
  // bottom number 5개씩 보여주기
  const pageCount = 5;
  // 총 페이지 수
  const totalPage = Math.ceil(totalData / pageSize);
  const pageGroup = Math.ceil(currentPage / pageCount);

  //// pagination HTML
  let last = pageGroup * pageCount;
  if (last > totalPage) last = totalPage;
  let first = last - (pageCount - 1);
  const next = last + 1;
  const prev = first - 1;
  const pages = document.querySelector(".pagination");
  document.querySelectorAll(".page-item").forEach((el) => el.remove());

  if (totalPage < 1) first = last;
  if (first > 5 || (first >= 3 && last < 10 && last - first >= 3)) {
    pages.insertAdjacentHTML(
      "afterbegin",
      `<li id='prevButton' class='page-item'><a onclick='getPage(${prev})' class="page-link" aria-label="Previous"'><span aria-hidden="true">&laquo;</span></a></li>`
    );
  }
  for (let i = first; i <= last; i++) {
    if (currentPage === i) {
      pages.insertAdjacentHTML(
        "beforeend",
        `<li class='active page-item'><a onclick='getPage(${i})' class='page-link'>${i}</a></li>`
      );
    } else if (i > 0) {
      pages.insertAdjacentHTML(
        "beforeend",
        `<li class='page-item'><a onclick='getPage(${i})' class='page-link'>${i}</a></li>`
      );
    }
  }
  if (next > 5 && next < totalPage) {
    pages.insertAdjacentHTML(
      "beforeend",
      `<li id='nextButton' class='page-item'><a onclick='getPage(${next})' class="page-link" aria-label="Next"'><span aria-hidden="true">&raquo;</span></a></li>`
    );
  }
}

// tab 클릭 시 filter
function handleTabClick(e) {
  currentPage = 1;
  cardHtml.setAttribute("style", "display:flex !important");
  pagination.style.display = "flex";
  cardDetail.style.display = "none";

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
    tabBeginner.classList.toggle(ACTIVE_CLASSNAME);
    renderPagination(filterLevel("Beginner"), currentPage);
  } else if (value === "Intermediate") {
    tabIntermediate.classList.toggle(ACTIVE_CLASSNAME);
    renderPagination(filterLevel("Intermediate"), currentPage);
  } else if (value === "Advanced") {
    tabAdvanced.classList.toggle(ACTIVE_CLASSNAME);
    renderPagination(filterLevel("Advanced"), currentPage);
  } else if (value === "All") {
    contents
      .filter((item, index) => {
        let start = (currentPage - 1) * pageSize;
        let end = currentPage * pageSize;
        if (index >= start && index < end) return true;
      })
      .map((content) => {
        createCard(content);
      });
    tabAll.classList.toggle(ACTIVE_CLASSNAME);
    renderPagination(contents.length, currentPage);
  }
}

// card html 생성
function createCard(content) {
  borderTop.setAttribute("style", "display:none !important");

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

  cardHtml.insertAdjacentHTML(
    "beforeend",
    `<div class='card mb-3' onclick='showCardDetail(event)'><img class="card-img-top" src="/public/img/${content.image}"><div class="card-body"><h5 class="card-title">${content.title}</h5><p class="card-text">${content.detail}</p><p class="card-text date">${month} ${date}, ${year}</p></div></div>`
  );
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
const cardDetail = document.querySelector("#card-detail");
function showCardDetail(event) {
  cardHtml.setAttribute("style", "display:none !important");
  borderTop.setAttribute("style", "display:block !important");
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
