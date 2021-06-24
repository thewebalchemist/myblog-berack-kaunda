const category = new URLSearchParams(window.location.search).get('category');

const categoryPosts = document.querySelector('.categoryPosts');



const catDev = document.querySelector(".catDev").addEventListener('click', () => {
    categoryPostData.category == "development"
});
const catCareer = document.querySelector(".catCareer");
const catMarketing = document.querySelector(".catMarketing")
const getCategoryPostData = async () => {
    

    const response = await fetch('http://localhost:3000/blogs/');
    let categoryPostData = await response.json();





    if ( category = "career" ){
        categoryPostData = categoryPostData.filter(d => d.category == "career")
    }else if( category = "development"){
        categoryPostData = categoryPostData.filter(d => d.category == "development")
    }else if( category = "marketing"){
        categoryPostData = categoryPostData.filter(d => d.category == "marketing")
    }
    var containerTemplate ='';
    containerTemplate += `
        <a href="details.html?=${categoryPostData.id}"><div class=" overflow-hidden cursor-pointer">
        <div>
            <img class=" object-cover rounded-sm " src="${categoryPostData.imageLink}" alt="please input a correct image link">
        </div>

        <div class="">
            <span class="text-blue-500 text-lg">${categoryPostData.category}</span>
            <h2 class="text-2xl text-white font-medium mt-3">
                ${categoryPostData.title.slice(0,200)}...
            </h2>
            <p class="text-gray-500 truncate mt-3">
            ${categoryPostData.body}
            </p>
        <div class="m-2 flex text-gray-500"> 
            <img class="h-8 rounded-full mr-4" src="./images/favicon.jpg" alt="">
            <span> ${categoryPostData.author}</span>
        </div>
        <div class=" text-white flex">
            <span class="mr-2"> ${categoryPostData.currentTime}</span>
            <span class="mr-2">•</span>
            <span> ${categoryPostData.readTime}</span>
        </div>
        </div>
    </div>
</a>        
        ` 
        categoryPosts.innerHTML = template;

}

window.addEventListener('DOMContentLoaded', () => getCategoryPostData());