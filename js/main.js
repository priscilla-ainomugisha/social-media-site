// retrieve profile from localStorage
const Profile = JSON.parse(localStorage.getItem("profile"));

const cardEls = document.querySelector(".cards");

// loop through the profiles array and display them on the page
Profile.forEach((profile, index) => {
  const el = document.createElement("a");
  el.setAttribute("href", `post.html?id=${index}`);
  el.className = "card";
  el.innerHTML = `
        <img src="images/${profile.photo}" alt="" srcset="" />
        <div class="card-text">
        <h3 class="f-size-med">${profile.name}</h3>
        </div>
    `;

  cardEls.append(el);
});
