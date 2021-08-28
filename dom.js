function styleSet(){
 const conatiner = document.getElementById('friend-container');
  conatiner.style.border = '3px solid green';
  conatiner.style.padding = '15px';
  conatiner.style.textAlign='center';
}
document.getElementById('add-border').addEventListener('click',function(){
 styleSet();
});

function addBackgroundColor(event){
    const backgroundColorChange = document.getElementsByClassName('friend');
    for (let color of backgroundColorChange ){
       color.style.backgroundColor = 'red'; 
    }
}

const getClass = document.getElementsByClassName('friend');
for ( let classes of getClass){
  classes.addEventListener('click',function(event){
   document.getElementById('friend-container').removeChild(classes);
   event.target.parentNode.removeChild(event.target);
  })
}


function addClass(){
const addClassFriend = document.getElementById('friend-container');
const friendClass = document.createElement('div');
friendClass.classList.add('friend');
friendClass.innerHTML = ` <h3 class="friend-name">Friend-1</h3>
            <p>Lorem, ipsum.</p>`
addClassFriend.appendChild(friendClass);
}

