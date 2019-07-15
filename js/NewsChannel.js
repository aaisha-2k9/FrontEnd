var bodyDiv;
var rightPannel, leftPannel;
const newsChannels =["All","Channel 1","Channel 2","Channel 3","Channel 4","Channel 5",
"Channel 6", "Channel 7", "Channel 8", "Channel 9","Channel 10"];
function GetChannelsInfo(){
  CreateHeader();
  bodyDiv = document.createElement('div');
  bodyDiv.setAttribute('class','body');
  leftPannel = document.createElement('div');
  leftPannel.setAttribute('class','left-pane');
  bodyDiv.appendChild(leftPannel);
  rightPannel = document.createElement('div');
  rightPannel.setAttribute('class','right-pane');
  bodyDiv.appendChild(rightPannel);
  document.body.appendChild(bodyDiv);
  for(var index =1; index< newsChannels.length; index++)
  {
    LoadChannelInfo(index);
  }
    CreateCategoryinfo();
  CreateFooter();
}
// Header Information
function CreateHeader(){
  var  headerInfo = document.createElement('div');
  headerInfo.setAttribute('class','header');
  let headerTag=document.createElement('h2');
  headerTag.innerHTML="NEWSFEED";
  headerTag.setAttribute('class','h2');
  headerInfo.appendChild(headerTag);
  var para= document.createElement("p");
  let node=document.createTextNode("Yet Another News Feed");
  para.setAttribute('class','description');
  para.appendChild(node);
  headerInfo.appendChild(para) ;
  document.body.appendChild(headerInfo);
  return headerInfo;
}

//Category & Email Subscribe Information
function CreateCategoryinfo(){
  let categoryDiv = document.createElement('div');
  let  categoryElement = document.createElement('div');
  let catergoryText = document.createElement('text');
  catergoryText.innerHTML="SELECT CATEGORY";
  catergoryText.setAttribute('class','news-category');
  categoryElement.appendChild(catergoryText);
  categoryElement.setAttribute('class','category-dropdown');
  categoryElement.appendChild(catergoryText);
  categoryDiv.appendChild(categoryElement);

  let selectElement =document.createElement("select");
  selectElement.setAttribute('class','dropdown');
  selectElement.setAttribute('OnChange','ShowHideDiv(this)');
  categoryDiv.appendChild(selectElement);

  for(var index =0 ;index< newsChannels.length; index++){
    var option= document.createElement("option");
    option.value= index;
    option.text= newsChannels[index];
    selectElement.appendChild(option);
  };
  let subscribeDiv =document.createElement('div');
  let subscribeText = document.createElement('text');
  subscribeText.innerHTML="SUBSCIBE";
  subscribeText.setAttribute('class','subscribe');
  subscribeDiv.appendChild(subscribeText);

  let emailElement = document.createElement('input');
  emailElement.setAttribute('type', 'text');
  emailElement.setAttribute('placeholder','Email Address');
  emailElement.setAttribute('class','email-address');
  emailElement.setAttribute('id','txtEmailAddress');
  subscribeDiv.appendChild(emailElement);

  let subscribebutton= document.createElement('input');
  subscribebutton.setAttribute('type', 'button');
  subscribebutton.setAttribute('value','Subscribe');
  subscribebutton.setAttribute('class','btn-subscribe');
  subscribebutton.setAttribute('id','btnSubscribe');
  subscribebutton.setAttribute('OnClick','SaveEmail()');
  subscribeDiv.appendChild(subscribebutton);

  categoryDiv.appendChild(subscribeDiv);
  rightPannel.appendChild(categoryDiv);
}

//Channels Information
function LoadChannelInfo(index){
  let newsContainer= document.createElement('div');
  newsContainer.setAttribute('class','news-container');
  newsContainer.setAttribute('id','Channel'+index);
  leftPannel.appendChild(newsContainer);
  let newsImage= document.createElement('div');
  newsImage.setAttribute('class','news-image');
  newsContainer.appendChild(newsImage);
  let newsContent= document.createElement('div');
  newsContent.setAttribute('class','news-content');
  newsContainer.appendChild(newsContent);
  let newsTitle= document.createElement('text');
  newsTitle.innerHTML= "Title " + index;
  newsTitle.setAttribute('class','news-header');
  newsContent.appendChild(newsTitle);
  let newsJournal= document.createElement('div');
  newsJournal.innerHTML= " Posted on 29 June //Category:Category " + index;
  newsJournal.setAttribute('class','news-journal');
  newsContent.appendChild(newsJournal);
  let newsInfo= document.createElement('p');
  newsInfo.innerHTML= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Consectetur adispiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.";
  newsInfo.setAttribute('class','news-decscription');
  newsContent.appendChild(newsInfo);
  let btnContainer= document.createElement('div');
  btnContainer.setAttribute('class','btn-continue');
  newsContent.appendChild(btnContainer);
  let btnContinue= document.createElement('input');
  btnContinue.setAttribute('type', 'button');
  btnContinue.setAttribute('class','btn-reading');
  btnContinue.setAttribute('value','Continue Reading');
  btnContinue.setAttribute('OnClick','ShowCustomPopup(this)');
  btnContinue.setAttribute('id','btnContinue'+index);
  btnContainer.appendChild(btnContinue);
}
function CreateFooter(){
  var  footerInfo = document.createElement('footer');
  footerInfo.setAttribute('class','footer');
  footerInfo.innerHTML="@ NewsFeed 2019";
  bodyDiv.appendChild(footerInfo);
}
