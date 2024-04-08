
 
const health_con = document.querySelector('#health')



function listdata(data){
  
    let health = data.blogs.filter((item)=>{
        return item.category === 'health';
    })

  console.log(health)
  for (let i = 0 ; i < health.length;i++){
    const item_con = document.createElement("div");
    item_con.innerHTML=`
    
    <div class="card">
    <img src=${health[i].img} alt="#">
    <div class="card-content">
    <h3>${health[i].title}</h3>
    <p class="views">view ${data.blogs[i].views} </p>
    <p>${health[i].content.substring(0,26)} .... </p>         
    <a href="blogs/blog-${health[i].id}.html" class="btn">Read More</a> 
    <a href="${health[i].link}"><p>${health[i].author} </p></a>                
    </div>
   </div>`      
   health_con.appendChild(item_con)

    } 

}



fetch('/Json/blogs.json')
.then(response => response.json())
.then(data =>listdata(data))
.catch(error => console.log('Error:', error));