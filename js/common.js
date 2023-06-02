// home
document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".parallax svg").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}



// work
filterSelection("all")
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("contentsBox_js");
  // All button
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    // indexOf : 문자열에서 특정 문자열을 찾고, 검색된 문자열의 첫번째 위치의 index값을 리턴함. 찾는 문자열이 없으면 -1 반환.
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// .show(display:block) 함수
function w3AddClass(element, name) {
  var i, arr1, arr2;
  // contentsBox의 class명을 단어별로 잘라서 잘려진 조각들을 배열에 저장하여 리턴 ex) ['contentsBox', 'contnetsBox_js', 'food']
  arr1 = element.className.split(" ");
  // ['show'] 배열이 contentsBox 갯수만큼 생김(위에 모두보기 "all이 있으므로")
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    // arr1 배열 중에서 arr2와 짝을 이뤄 (초기상황일 경우) show가 없으면 i번째 element(contentsBox_js)에 i번째 arr2를 클래스로 넣음(" " <-은 공백)
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    console.log(arr2[i])
  }
}
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
} 
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("title");
var btns = btnContainer.getElementsByClassName("menu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}