const id = new URLSearchParams(window.location.search).get('id');
const singlePostDetail = document.querySelector('.singlePostDetails');




const getSinglePostDetails = async () => {
    

    const response = await fetch('http://localhost:3000/blogs/' + id);
    const singlePostDetails = await response.json();

    var template ='';
    template += `
        
        <div class="">
        <div class=" md:m-24 ">
        <span class="text-blue-500 text-lg uppercase">${singlePostDetails.category}</span>
        <h2 class=" text-lg md:text-6xl text-white font-medium mt-3">
            ${singlePostDetails.title}
        </h2>
        <hr class="border-top border-gray-500 mt-10 mb-10">
        <div class="m-2 flex text-gray-500"> 
            <img class="h-8 rounded-full mr-4" src="./images/favicon.jpg" alt="">
            <span>${singlePostDetails.author}</span>
        </div>
        
    <div class="text-sm text-gray-500 pb-5 ">
        <span class="mr-2">Published On ${singlePostDetails.currentTime}</span>
        <span class=" block md: ">${singlePostDetails.readTime}</span>
    </div>    
</div> 
    <div class="overflow-hidden pb-5 ">
        <img class=" object-cover rounded-sm" src="${singlePostDetails.imageLink}" alt="please input a correct image link">
    </div>
    <div class="md:m-24">
        <p class="text-gray-500 text-sm md:text-2xl">
        ${singlePostDetails.body}
        </p>
    </div>

    </div>
        `
    singlePostDetail.innerHTML = template;

}

window.addEventListener('DOMContentLoaded', () => getSinglePostDetails());