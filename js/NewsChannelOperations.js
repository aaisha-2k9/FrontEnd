function saveEmail() {
  var emailAddresss = document.getElementById("txtEmailAddress").value;
  if (validateEmail(emailAddresss)) {
    localStorage.setItem("email", emailAddresss);
    document.getElementById("customerror").innerHTML = "Your Email Address has been saved";
    document.getElementById("customerror").setAttribute("class","success-message");
  }
  else {
    document.getElementById("customerror").innerHTML =  "Please enter valid Email Address";
  document.getElementById("customerror").setAttribute("class","custom-error");
  }
}
function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
}
function showHideDiv(selectedElement) {

  if (selectedElement.value > 0) {
    for (let index = 1; index < newsChannels.length; index++) {
      if (selectedElement.value == index) {
        document
          .getElementById("Channel" + index)
          .setAttribute("style", "display:block");

      } else {
        document
          .getElementById("Channel" + index)
          .setAttribute("style", "display:None");
      }
    }
  } else {
    newsChannels.forEach((item,index)=> {
      if (index > 0 ) {
      document
        .getElementsByClassName("news-container")[index-1]
        .setAttribute("style", "display:block");
    }});
  }
}

function showCustomPopup(item) {
  var selectedDiv = document.getElementById(item);
  item.parentElement.parentElement.parentElement.setAttribute(
    "class",
    "custom-popup"
  );
  item.parentElement.setAttribute("style", "display:None");
  for (let index = 1; index < newsChannels.length; index++) {
    if (
      item.parentElement.parentElement.parentElement.id !=
      document.getElementById("Channel" + index).id
    ) {
      document
        .getElementById("Channel" + index)
        .setAttribute("class", "news-container");
      document
        .getElementById("btnContinue" + index)
        .setAttribute("style", "display:block");
    }
  }

}
