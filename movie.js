
 
const movie_con = document.querySelector('#movie')



function listdata(data){
  
    let movie = data.blogs.filter((item)=>{
        return item.category === 'movie';
    })

  console.log(movie)
  for (let i = 0 ; i < movie.length;i++){
    const item_con = document.createElement("div");
    item_con.innerHTML=`
    
    <div class="card">
    <img src=${movie[i].img} alt="#">
    <div class="card-content">
    <h3>${movie[i].title}</h3>
    <p class="views">view ${data.blogs[i].views} </p>
    <p>${movie[i].content.substring(0,26)} .... </p>         
    <a href="blogs/blog-${movie[i].id}.html" class="btn">Read More</a> 
    <a href="${movie[i].link}"><p>${movie[i].author} </p></a>                
    </div>
   </div>`      
   movie_con.appendChild(item_con)

    } 

}



fetch('/Json/blogs.json')
.then(response => response.json())
.then(data =>listdata(data))
.catch(error => console.log('Error:', error));