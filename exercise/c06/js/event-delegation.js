function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

function itemDone(e) {

  var target, elParent, elGrandparent;
  target = getTarget(e);
  /* 书中代码方法存在两个缺点：
  如果用户点击列表项之间的空隙，将移去整个list
   - Clicking between list items would remove the whole list
   如果用户点击了第一个列表项中的em文字，将会移调链接而不是列表项
   - Clicking on italic text would remove the link - not the list item
  */
  // elParent = target.parentNode;
  // elGrandparent = target.parentNode.parentNode;
  // elGrandparent.removeChild(elParent);

  if ( target.nodeName.toLowerCase() == "a") {
    elParent = target.parentNode;
    elGrandparent = elParent.parentNode;
    elGrandparent.removeChild(elParent);
  }
  if ( target.nodeName.toLowerCase() == "em") {
    elParent = target.parentNode.parentNode;
    elGrandparent = elParent.parentNode;
    elGrandparent.removeChild(elParent);
  }


  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }

}

//set up event listeners to call itemDone() on clicke
var el = document.getElementById('shoppingList');
if (el.addEventListener){
  el.addEventListener('click',function(e){
    itemDone(e);
  },false);
} else{
  el.attachEvent('onclick',function(e){
    itemDone(e);
  });
}
