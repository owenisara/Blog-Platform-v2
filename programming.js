
 
const program_con = document.querySelector('#program')



function listdata(data){
  
    let program = data.blogs.filter((item)=>{
        return item.category === 'programming';
    })

  console.log(program)
  for (let i = 0 ; i < program.length;i++){
    const item_con = document.createElement("div");
    item_con.innerHTML=`
    
    <div class="card">
    <img src=${program[i].img} alt="#">
    <div class="card-content">
    <h3>${program[i].title}</h3>
    <p class="views">view ${program[i].views} </p>
    <p>${program[i].content.substring(0,26)} .... </p>         
    <a href="blogs/blog-${program[i].id}.html" class="btn">Read More</a> 
    <a href="${program[i].link}"><p>${program[i].author} </p></a>                
    </div>
   </div>`      
   program_con.appendChild(item_con)

    } 

}



fetch('/Json/blogs.json')
.then(response => response.json())
.then(data =>listdata(data))
.catch(error => console.log('Error:', error));