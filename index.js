const getData = async (page) => {
  const url = `https://shadow-glittery-bosworth.glitch.me/users?_page=${page}&_limit=25`;
  try {
    let res = await fetch(url);
    let Users = await res.json();
    displayUsers(Users);
  } catch (err) {
    console.log("err:", err);
  }
};
let page = 1;
getData(page);
// setTimeout(() => {
//   //   let animation = document.getElementById("animationdiv");
//   //   animation.classList.add("displaynone");
// }, 500);

const showData = () => {
  setTimeout(() => {
    page++;
    // console.log("page:", page);
    getData(page);
    // let animation = document.getElementById("animationdiv");
    // animation.classList.add("displaynone");
  }, 200);
};

let scrolled = document.getElementById("main");
scrolled.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } =
    document.getElementById("main");
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    // let animation = document.getElementById("animationdiv");
    // animation.classList.remove("displaynone");
    showData();
  }
});
function displayUsers(Users) {
  Users.map((user) => {
    let card = document.createElement("div");
    card.id = "card";

    let first_name = document.createElement("h2");
    first_name.innerText = `${user.first_name}`;
    first_name.className = "first_name";
    let last_name = document.createElement("h2");
    last_name.innerText = `${user.last_name}`;
    last_name.className = "last_name";
    let userid = document.createElement("h2");
    userid.innerText = `${user.id}`;
    userid.className = "userid";

    card.append(first_name, last_name, userid);
    document.getElementById("main").append(card);
  });
}
