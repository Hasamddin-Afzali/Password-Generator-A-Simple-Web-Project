function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-/';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

for (let i = 0; i < 5; i++) {
  const randomString = generateRandomString(10);
  console.log(randomString);
}
function generate(){
  var level = document.getElementsByName("level");
  for (let i = 0; i < level.length; i++) {
    if (level[i].checked) {
      const selectedValue = level[i].value;

      if(selectedValue == "Weak"){
        const randomString = generateRandomString(7);
        document.getElementById("password").innerHTML = randomString;
        document.getElementById("generate").innerHTML = "Weak Password";
        document.getElementById("password").style = "color:tomato;padding:10px";
        document.getElementById("generate").style = "color:white;background-color:tomato;padding:5px;border-radius:5px";
      }else if(selectedValue == "Middle"){
        document.getElementById("generate").innerHTML = "Middle Password";
        const randomString = generateRandomString(9);
        document.getElementById("password").innerHTML = randomString;
        document.getElementById("password").style = "color:orange;padding:10px";
        document.getElementById("generate").style = "color:white;background-color:orange;padding:5px;border-radius:5px";
      }else{
        document.getElementById("generate").innerHTML = "Strong Password";
        const randomString = generateRandomString(12);
        document.getElementById("password").innerHTML = randomString;
        document.getElementById("password").style = "color:lightgreen;padding:10px";
        document.getElementById("generate").style = "color:white;background-color:green;padding:5px;border-radius:5px";

      }
      return selectedValue;
    }
  }

}

