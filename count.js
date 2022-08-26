//to store a value and when you reflesh page the value of item not get lost but countinue where we left off


if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter',0)
}
function count(){
    let counter = localStorage.getItem('counter');
     counter ++;
     document.querySelector('h1').innerHTML = counter;
     localStorage.setItem('counter',counter);
                
                
            }
            document.addEventListener('DOMContentLoaded', function(){// used to load whole html document and perform next tasks in {}
                
                //document.querySelector('button').addEventListener('click',count);

                document.querySelector('button').onclick = count;
                document.querySelector('h1').innerHTML = localStorage.getItem('counter');

                //setInterval(count,1000); count with interval
            });