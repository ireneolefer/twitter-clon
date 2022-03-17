import "modern-css-reset";
import "./../assets/styles/tailwind.css";
import "./../assets/styles/style.sass";
import "phosphor-icons";
import mockData from "./MOCK_DATA.json";

console.log(mockData);

let filterData = [];

window.addEventListener("load", () => {
  renderTweets();
  initSearchEvents();
  initNewTweetEvents();
});

const renderTweet = (data = mockData) => {
  const feedBlock = document.querySelector(".tweets");
  let tweetString = "";
  for (let i = 0; i < data.length; i++) {
    tweetString += `
      <div class="tweet">
      <div class="pic">
        <i class="ph-user-circle"></i>
      </div>
      <div class="info">
        <div class="linea01">
          <div class="nombre">${data[i].Nombre_usuario}</div>
         <div class="usuario"> @${data[i].Nombre_usuario}</div>
          <div class="fecha">3h </div>
        </div>
      
        <div class="texto">${data[i].Tweet}</div>
        <div class="linea02">
          <div class="coment">${data[i].Coment}t</div>
          <div class="retweet">${data[i].Retweet}</div>
          <div class="like">${data[i].Like}</div>
        </div>
      </div>
      
    </div>
              `;

    feedBlock.innerHTML = tweetString;
  }
};
renderTweet();

//

//

let tweets = []; // array[{}, {}, {}]
let searchString = ""; // string
let fiteredTweets = []; // array[{}, {}, {}]

const initEventTweets = () => {
  //
  //
  document.addEventListener("click", () => {
    updateTweets();
  });
};

const updateTweets = () => {
  renderTweets();
};

const filterTweets = () => {
  // tweets.filter()....
  if (3 > 2) {
    renderFilteredTweets();
  } else {
    renderEmpty();
  }
};

const renderEmpty = () => {};

const renderFilteredTweets = () => {
  //
  //
  //
  initEventTweets();
};

const initSearchEvents = () => {
  const searchInput = document.querySelector(".search input");
  searchInput.addEventListener("keyup", () => {
    const searchInputValue = searchInput.value;
    console.log(searchInputValue);

    if (searchInputValue.length >= 3) {
      filterData = mockData.filter((d) => {
        return d.Tweet.includes(searchInputValue);
      });
      renderTweet(filterData);
    } else {
      renderTweet();
    }
  });

  console.log(searchInput);
  //(usuario escribe)
  //filter
  let searchString;
  if (searchString > 3) {
    //filter
    if (existe) {
      renderFilteredTweets();
    } else {
      renderError();
    }
  } else {
    renderTweet();
  }
};

initSearchEvents();

const counterVisible = document.querySelector(".counter");
const isButtonActive = false;
const newTweetText = document.querySelector("");

initNewTweetEvents = () => {
  initTextArea();
  initButtonEvent();
};

initCounterEvent = () => {
  if (counterActivated) {
    //show
  } else {
    //hide
  }
};

initTextArea = () => {
  //leemos texto
  //check length
  if ((newTweetText = 0)) {
    counterActivated = false;
    initCounterEvent();
    initButtonEvent();
  } else if (newTweetText > 0 < 160) {
    counterActivated = true;
    initCounterEvent(true);
    initButtonEvent();
  } else {
    counterActivated = true;
    initCounterEvent(true);
    initButtonEvent();
  }
  //actualizamos el contador
};

initButtonEvent = () => {
  if (true) {
    //activar
    //leemos el contenido
    //actualizamos array
    renderTweet();
  } else {
    //desactivar
  }
};
