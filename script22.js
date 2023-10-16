
var arr=[
    { name:"Aryan",img:"https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",status:"Strangers"},
    {name:"Nikita",img:"https://images.unsplash.com/photo-1494354145959-25cb82edf23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",status:"Strangers"},
    {name:"sujal",img:"https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80",status:"Strangers"},
    ];
    
    function abc(){
    
    var clutter="";

    arr.forEach(function(val,index){
    clutter +=`<div class="card">
    <img src="${val.img}" alt="">
    <h3>${val.name}</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, aspernatur nulla accusamus voluptate quia, </p>
    <h4 id="${val.status.split(" ").join("") }">${val.status}</h4>
    <button class="${val.status==="Strangers" ? " blue" :" red "} " id="${index}">${val.status=="Strangers" ? "Add Friends" : "Remove Friends"} </button>
    </div>
    `
    })
    document.querySelector("#cards").innerHTML=clutter;
}
abc();
var flag=0
var timer;
 
    document.querySelector("#cards").addEventListener("click",function(details){
      
             if( flag===0){
            arr[details.target.id].status="Friend requst send"
timer= setTimeout(function(){
    arr[details.target.id].status="Friends"
    abc();
},2000)
abc();
flag=1
        }
        else{
            arr[details.target.id].status="Strangers"
            clearTimeout(timer);
            abc();
            flag=0
        }
    
    })
   