const UserInformation = localStorage.getItem("user");

console.log(UserInformation);
if (UserInformation) {
    const userInfo = JSON.parse(UserInformation);
    document.getElementById("name").textContent = userInfo.name
    document.getElementById("lname").textContent = userInfo.lname
    document.getElementById("country").textContent = userInfo.country
    document.getElementById("pNumber").textContent = userInfo.pNumber
    document.getElementById("state").textContent = userInfo.state
    document.getElementById("city").textContent = userInfo.city
} else {
  userInfoObject();
}

function userInfoObject() {

  const name = prompt("Enter your first name");
  const lname = prompt("Enter your last name");
  const country = prompt("Enter your country");
  const pNumber = prompt("Enter your phone number");
  const state = prompt("Enter your state");
  const city = prompt("Enter your city");

  let user = {
    name,
    lname,
    country,
    pNumber,
    state,
    city
  };

  localStorage.setItem("user", JSON.stringify(user));
  
  document.getElementById("name").textContent = user.name
  document.getElementById("lname").textContent = user.lname
  document.getElementById("country").textContent = user.country
  document.getElementById("pNumber").textContent = user.pNumber
  document.getElementById("state").textContent = user.state
  document.getElementById("city").textContent = user.city

}

