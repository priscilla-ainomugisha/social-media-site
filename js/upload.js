// listen to upload form submission and store the information in a local storage
const form = document.querySelector("form#register-form");

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

  Profile.push({
    name,
    education: { university, secondary, primary },
    statement,
    photo: photo.slice(12),
    hobbies,
  });

  // convert array to JSON string
  localStorage.setItem("profile", JSON.stringify(Profile));

  // redirect to homepage
  location.assign("index.html");
});
