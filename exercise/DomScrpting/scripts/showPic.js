function showPic(whichpic) {
  // 添加必要的检查
  if (!document.getElementById("placeholder")) return true;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
  if (!document.getElementById("description")) return false;
  if (whichpic.getAttribute("title")) {
    var text = whichpic.getAttribute("title");
  } else {
    var text = "";
  }
  var description = document.getElementById("description");
  if (description.firstChild.nodeType == 3) {
    description.firstChild.nodeValue = text;
  }
  return false;
}

function prepareGallery() {
  //必要的检查工作
  if(!document.getElementsByTagName) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("imagegallery")) return false;
  //设置变量名
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  // 遍历
  for ( var i = 0; i < links.length; i++) {
    links[i].onclick = function(){
      return showPic(this);
    }
    links[i].onkeypress = links[i].onclick;
  }
}

// 共享onload事件
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(prepareGallery);
