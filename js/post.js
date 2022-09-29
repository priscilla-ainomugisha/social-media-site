// retrieve profile from localStorage
const Profile = JSON.parse(localStorage.getItem("profile"));

// get id param from URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ID = urlParams.get("id");

const postImgEl = document.querySelector("main#post .post-hdr img");
const postNameEl = document.querySelector("main#post .post-body h3");
const postStateEl = document.querySelector("main#post .post-body p");
const postUniEl = document.querySelector("main#post ul li.university");
const postSecEl = document.querySelector("main#post ul li.secondary");
const postPriEl = document.querySelector("main#post ul li.primary");
const postHobbyEl = document.querySelector("main#post .post-body p.hobbies");
const deleteBtn = document.querySelector("a.del-btn");
const editBtn = document.querySelector("a.edit-btn");

Profile.forEach((profile, index) => {
  if (index == ID) {
    postImgEl.setAttribute("src", `images/${profile.photo}`);
    postNameEl.innerHTML = `${profile.name}`;
    postStateEl.innerHTML = `${profile.statement}`;
    postHobbyEl.innerHTML = `${profile.hobbies}`;
    postUniEl.innerHTML = `${profile.education.university}`;
    postSecEl.innerHTML = `${profile.education.secondary}`;
    postPriEl.innerHTML = `${profile.education.primary}`;
    deleteBtn.setAttribute("data-target", `${index}`);
    editBtn.setAttribute("href", `post-edit.html?id=${index}`);
  }
});

// handle deleting of profile
const newProfile = [];

deleteBtn.addEventListener("click", () => {
  const newID = parseInt(deleteBtn.getAttribute("data-target"));

  Profile.forEach((profile, index) => {
    if (index !== newID) {
      newProfile.push(profile);
    }
  });

  localStorage.setItem("profile", JSON.stringify(newProfile));

  location.assign("index.html");
});
