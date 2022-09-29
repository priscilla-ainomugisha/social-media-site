// get id param from URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ID = urlParams.get("id");

// listen to upload form submission and store the information in a local storage
const form = document.querySelector("form#register-form");

// load post information in the form
const Profile = JSON.parse(localStorage.getItem("profile"));

Profile.forEach((profile, index) => {
  if (index == ID) {
    form.name.value = profile.name;
    form.university.value = profile.education.university;
    form.secondary.value = profile.education.secondary;
    form.primary.value = profile.education.primary;
    form.statement.value = profile.statement;
    form.hobbies.value = profile.hobbies;
  }
});

form.addEventListener("submit", (e) => {
  // stop page reload on form submission
  e.preventDefault();

  // create a variable for each form input
  const name = form.name.value;
  const university = form.university.value;
  const secondary = form.secondary.value;
  const primary = form.primary.value;
  const statement = form.statement.value;
  const photo = form.image.value;
  const hobbies = form.hobbies.value;

  // create array to hold input values
  const Profile = JSON.parse(localStorage.getItem("profile"));
  const newProfile = [];

  // loop through the Profile array and find the one with the same index as the ID
  Profile.forEach((profile, index) => {
    if (index == ID) {
      newProfile.push({
        name,
        education: { university, secondary, primary },
        statement,
        photo: photo.slice(12),
        hobbies,
      });
    } else {
      newProfile.push(profile);
    }
  });

  // convert array to JSON string
  localStorage.setItem("profile", JSON.stringify(newProfile));

  // redirect to homepage
  location.assign("index.html");
});
