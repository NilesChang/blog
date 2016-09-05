/**
 * addLoadEvent 和 insertAfter 属于通用型函数
 * preparePlaceholder 将把新创建的元素插入到节点树imagegallery清单的后面
 * prepareGallery 负责处理事件
 * showPic 负责把 placeholder图片切换为目标图片
 */
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

/**
 * DOM提供了insertBefore()方法，但是需要自己编写insertAfter()方法
 * 其中用到了insertBefore()方法
 */
 function insertAfter(newElement,targetElement) {
   var parent = targetElement.parentNode;
   if (parent.lastChild == targetElement){
    //  如果目标元素就是父节点最后一个子元素，那么直接添加
    parent.appendChild(newElement);
  } else {
    // 在目标节点的下一个兄弟之前添加，聪明吧！
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
 }

 /**
  * 2016-9-5 动态创建标记
  * 将原本属于HTML的标记删除
  */
 function preparePlaceholder() {
   /**
    * 分为三段，最后添加的是测试浏览器是否支持，但是放在最前面
    */
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;

   var placeholder = document.createElement("img");
   placeholder.setAttribute("id","placeholder");
   placeholder.setAttribute("src","images/placeholder.gif");
   placeholder.setAttribute("alt","my image gallery");

   var description = document.createElement("p");
   description.setAttribute("id","description");
   var desctext = document.createTextNode("Choose an image");
   description.appendChild(desctext);
    /**
     *  如果图片清单刚好是body部分的最后一个元素，如果图片清单后面还有其他内容呢？
     *  document.body.appendChild(placeholder);
     *  document.body.appendChild(description);
     *  真正要实现的，是新创建的元素紧跟在图片清单的后面，而不管清单出现在body什么地方
     */
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);

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

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
