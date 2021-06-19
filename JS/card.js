window.onload = function(){
     const iconShopping=document.querySelector('.iconShopping');
     const cartBox=document.querySelector('.cartBox');
     const carteCloseBtn=document.querySelector('.fa-close');
     iconShopping.addEventListener("click",function(){
         cartBox.classList.add('active');
     });
     carteCloseBtn.addEventListener("click",function(){
         cartBox.classList.remove('active');
     });

//adding data to localStorage
const attToCartBtn = document.getElementsByClassName('btn-primary');
let items=[];
for(let i=0; i<attToCartBtn.length; i++){
    attToCartBtn[i].addEventListener("click",function(e){
if (typeof(Storage) !== "undefined") {
    let item = {
        id:i+1,
        name:e.target.parentElement.children[0].textContent,
        price:e.target.parentElement.children[1].children[0].textContent,
        no:1
    };
if(JSON.parse(localStorage.getItem('items')) === null){
    items.push(item);
    localStorage.setItem("items",JSON.stringify(items));
    window.location.reload();
}else{
    const localItems = JSON.parse(localStorage.getItem("items"));
    localItems.map(data=>{
        if(item.id == data.id){
            item.no = data.no + 1;
        }else{
            items.push(data);
        }
    });
    items.push(item);
    localStorage.setItem('items',JSON.stringify(items));
    window.location.reload();

}
  } else {

   console.log("local storege is not working");
  }
 });
}
// adding number to shopping icon
const iconShoppingP = document.querySelector('.iconShopping p');
let no = 0;
JSON.parse(localStorage.getItem('items')).map(data=>{
    no = no+data.no
;	});
iconShoppingP.innerHTML = no;


//adding cartbox data in table
const cardBoxTable = cartBox.querySelector('table');
let tableData = '';
tableData += '<tr><th>S no </th><th>Item Name</th><th>Quantity</th><th>Item Price</th><th></th></tr>';
if(JSON.parse(localStorage.getItem('items'))[0] === null){
    tableData += '<tr><td colspan="5">No items found</td></tr>'
}else{
    JSON.parse(localStorage.getItem('items')).map(data=>{
        tableData += '<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'</th><th>'+data.price*data.no+'DT</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
    });
}

cardBoxTable.innerHTML = tableData;



}




