
 
const tarvel_con = document.querySelector('#tarvel')



function listdata(data){
  
    let tarvel = data.blogs.filter((item)=>{
        return item.category === 'tarvel';
    })

  console.log(tarvel)
  for (let i = 0 ; i < 10;i++){
    const item_con = document.createElement("div");
    item_con.innerHTML=`
    
    <div class="card">
    <img src=${tarvel[i].img} alt="#">
    <div class="card-content">
    <h3>${tarvel[i].title}</h3>
    <p class="views">view ${tarvel[i].views} </p>
    <p>${tarvel[i].content.substring(0,26)} .... </p>         
    <a href="blogs/blog-${tarvel[i].id}.html" class="btn">Read More</a> 
    <a href="${tarvel[i].link}"><p>${tarvel[i].author} </p></a>                
    </div>
   </div>`      
   tarvel_con.appendChild(item_con)

    } 

}



fetch('/Json/blogs.json')
.then(response => response.json())
.then(data =>listdata(data))
.catch(error => console.log('Error:', error));