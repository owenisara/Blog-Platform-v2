const category = document.querySelector('#category')

function listdata(data){
    console.log(data)
    for (let i = 0 ; i < data.category.length;i++){
        const item_con = document.createElement("div");
        item_con.innerHTML=`
        <a href="${data.category[i].link}">
        <div class="card-category" style="background-image: url( ${data.category[i].img})  ;">  
        <h3>${data.category[i].name}</h3>
                     
       </div></a> `      
       category.appendChild(item_con)
        } 
}


fetch('/Json/category.json')
.then(response => response.json())
.then(data =>listdata(data))
.catch(error => console.log('Error:', error));