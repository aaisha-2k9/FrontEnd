function SaveEmail(){
  var emailAddresss= document.getElementById('txtEmailAddress').value;
  if (ValidateEmail(emailAddresss)){
    localStorage.setItem('email',emailAddresss);
  }
}
function ValidateEmail(mail)
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true;
  }
}
function ShowHideDiv(selectedElement) {
  if(selectedElement.value> 0){
    for(var index =1 ;index< newsChannels.length; index++){

      if (selectedElement.value == index){
        document.getElementById('Channel' +index ).setAttribute('style','display:block');
      }
      else{
        document.getElementById('Channel' +index).setAttribute('style','display:None');
      }
    }}
    else {
      for(var index =1 ;index< newsChannels.length; index++){
        document.getElementById('Channel' +index ).setAttribute('style','display:block');
      }
    }
  }

  function ShowCustomPopup(item)
  {
    var selectedDiv= document.getElementById(item);
    item.parentElement.parentElement.parentElement.setAttribute('class','custom-popup');
    item.parentElement.setAttribute('style','display:None');
    for(var index =1 ;index< newsChannels.length; index++){
            if (item.parentElement.parentElement.parentElement.id != document.getElementById('Channel' +index).id){
        document.getElementById('Channel' +index).setAttribute('class','news-container');
        document.getElementById('btnContinue' +index).setAttribute('style','display:block');
      }
    }

  }
