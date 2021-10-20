let mainElement = document.querySelector("div.main>img");
let count=1;
let URL;
const MAX=19;
let thumbnailsElement = document.querySelector("div.thumbnails");
let nowPlaying = false;
let timer;

function prev(){
  count = count-1;
  if(count==0){
    count=19;
    thumbnailsElement.children[0].classList.remove('selected');
  }else{
    thumbnailsElement.children[count].classList.remove('selected');
  }

  if(count<10){
    URL= "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
  }else{
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
  }
  thumbnailsElement.children[count-1].classList.add('selected');
  mainElement.setAttribute('src', URL);
}

function right(){
  count = count+1;
  if(count==20){
    count=1;
    thumbnailsElement.children[MAX-1].classList.remove('selected');
  }else{
    thumbnailsElement.children[count-2].classList.remove('selected');
  }
  if(count<10){
    URL= "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
  }else{
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
  }

  thumbnailsElement.children[count-1].classList.add('selected');
  mainElement.setAttribute('src', URL);
}
  function play(){
    if(!nowPlaying){
      nowPlaying = true;
      autoPlay();
    }
  }
  function autoPlay(){
      right();
    timer = setTimeout(function(){
        autoPlay();
    }, 1000);
  }
  function stop() {
      clearTimeout(timer);
      nowPlaying = false;
  }
  function reset(){
      stop();
      thumbnailsElement.children[count-1].classList.remove('selected');
      count = 1;
      URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
      mainElement.setAttribute('src', URL);
      thumbnailsElement.children[count-1].classList.add('selected');
  }
