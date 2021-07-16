// Add your javascript here
//grab the element by id
//set event listener
// on click
// check if what's tageted owns the event listener
//if yes, say the rectangle name
// if no, do absolutely nothing

document.getElementById('rect1').addEventListener('click',(event)=>{
    if(event.target===event.currentTarget){
           
    }
})
document.getElementById('rect2').addEventListener('click',(event)=>{
    if(event.target===event.currentTarget){
        alert('Rectangle Two Clicked');
    }
})
document.getElementById('rect3').addEventListener('click',(event)=>{
    if(event.target===event.currentTarget){
        alert('Rectangle Three Clicked');
    }
})
