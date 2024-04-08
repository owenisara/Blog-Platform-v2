
const Popular_Blogs = document.querySelector('#popular')
const blogs_all = document.querySelector('#blogs')
const statistics_con = document.querySelector('#statistics')

 function showdata(data){
    console.log(data.blogs)
    for (let i = 0 ; i < 10;i++){
        const item_con = document.createElement("div");
        item_con.innerHTML=`
        
        <div class="card">
        <img src=${data.blogs[i].img} alt="#">
        <div class="card-content">
        <h3>${data.blogs[i].title}</h3>
        <p class="views">view ${data.blogs[i].views} </p>
        <p>${data.blogs[i].content.substring(0,26)} .... </p>         
        <a href="blogs/blog-${i+1}.html" class="btn">Read More</a> 
        <a href="${data.blogs[i].link}"><p>${data.blogs[i].author} </p></a>                
        </div>
       </div>`      
        Popular_Blogs.appendChild(item_con)
   
        } 

        for (let i = 0 ; i < data.blogs.length;i++){
            const item_con = document.createElement("div");
            item_con.innerHTML=`
            
            <div class="card">
            <img src=${data.blogs[i].img} alt="#">
            <div class="card-content">
            <h3>${data.blogs[i].title}</h3>
            <p class="views">view ${data.blogs[i].views} </p>
            <p>${data.blogs[i].content.substring(0,26)} .... </p>         
            <a href="blogs/blog-${i+1}.html" class="btn">Read More</a> 
            <a href="${data.blogs[i].link}"><p>${data.blogs[i].author} </p></a>                
            </div>
           </div>`      
           blogs_all.appendChild(item_con)
          
            } 
 }


 function showstatistic(data){
    console.log(data)
    const item_con = document.createElement("div");
    item_con.innerHTML=`<div >
    <p>Blog : ${data.statistics.totalBlogs} </p> 
    <p>View : ${data.statistics.totalViews} </p> 

    </div>`
    
    statistics_con.appendChild(item_con)
 }


  fetch('/Json/blogs.json')
  .then(response => response.json())
  .then(data =>showdata(data))
  .catch(error => console.log('Error:', error));

  fetch('/Json/statistics.json')
  .then(response => response.json())
  .then(data =>(showstatistic(data)))
  .catch(error => console.log('Error:', error));
