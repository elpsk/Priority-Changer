/*jshint esversion: 6 */

var elementsInsideBody = [...document.body.getElementsByTagName('*')];

function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });
  });
}

function replaceText (node) {
  let value = node.nodeValue;

  value = value.replace(/Urgent/gi, 'Trivial');
  value = value.replace(/Important/gi, 'Irrelevant');
  value = value.replace(/ASAP/gi, 'next week');
  value = value.replace(/EOD/gi, 'next week');
  value = value.replace(/RSVP/gi, 'RWYW (respond when you want)');

  node.nodeValue = value;
}

window.onload = findAndReplace();
