
window.addEventListener('scroll', () => {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle('sticky', window.scrollY > 0);
})

//get full year
var getYear = document.querySelector(".getYear");
let year = new Date().getFullYear();
getYear.innerText = year;
//get full year

//header

const navbar = document.querySelector('.navbar');

        let navbarTemplate = '';
                navbarTemplate += `    
            <div class=" overflow-hidden ">
            <div  class="block">
                <div>
                    <img class="h-10 mt-2 md:m-0 md:h-20 float-left md:p-1" src="./images/berack-kaunda-1.png" alt="berack kaunda">
                </div>
                <div class=" toggleBtn lg:hidden ">
                    <i class="open cursor-pointer im im-menu float-right text-3xl m-2"></i>
                    <i class="close cursor-pointer hidden im im-x-mark float-right text-3xl m-2"></i>  
                </div>
                <div>
                    <img class="profilePic lg:hidden whenLoggedIn cursor-pointer float-right h-8 m-2 rounded-full " src="./images/favicon.jpg" alt="">
                </div>
            </div>
                <div class=" hidden lg:block">
                    <div>
                        <img class="profilePic whenLoggedIn hidden cursor-pointer float-right h-12 rounded-full m-4" src="./images/favicon.jpg" alt="">
                    </div>
                    <a href="./create.html">
                        <button class="createPost whenLoggedIn hidden float-right m-4 border-0 focus:outline-none rounded-md p-3 bg-blue-600 text-white font-bold cursor-pointer">
                            Create Post
                        </button>
                    </a>

                        <div>
                            <button class="openSignUpModal whenLoggedOut hidden float-right m-4 border-0 focus:outline-none rounded-md p-3 bg-blue-600 text-white font-bold cursor-pointer">
                                Sign Up
                            </button>
                        </div>        

                        <div>
                            <button  class="openLoginModal whenLoggedOut hidden float-right m-4 border-0 focus:outline-none rounded-md p-3 bg-blue-600 text-white font-bold cursor-pointer">
                                Login
                            </button>
                            <div>
                                <button class="logout whenLoggedIn hidden float-right m-4 border-0 focus:outline-none rounded-md p-3 bg-blue-600 text-white font-bold cursor-pointer">
                                    Logout
                                </button>
                            </div>
                </div>

                </div>
                </div>
`
navbar.innerHTML = navbarTemplate;


// modal

//opening modals
const openSignUpModals = document.querySelectorAll(".openSignUpModal");
const signUpModal = document.querySelector('.signUpModal');
        for (const openSignUpModal of openSignUpModals) {
            openSignUpModal.addEventListener('click', () => {
                signUpModal.classList.toggle('hidden');
                loginModal.classList.add('hidden');
            });
        }
        
const openLoginModals = document.querySelectorAll('.openLoginModal');
    const loginModal = document.querySelector('.loginModal');
        for (const  openLoginModal of  openLoginModals) {
            openLoginModal.addEventListener('click', () => {
                loginModal.classList.toggle('hidden');
                signUpModal.classList.add('hidden');
            });   
        } 
        
//closing modals
const closeModals = document.querySelectorAll('.closeModal');
        for (const closeModal of closeModals) {
            closeModal.addEventListener('click', () => {
                signUpModal.classList.add('hidden');
                loginModal.classList.add('hidden');
            });
        }

// modal


//toggle menu 
const toggleMenu = document.querySelector(".toggleMenu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const toggleBtn = document.querySelector(".toggleBtn").addEventListener('click', () => {
    toggleMenu.classList.toggle('w-64');
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');
    signUpModal.classList.add('hidden');
    loginModal.classList.add('hidden');
    userInfo.classList.add('hidden');
    
});

const userInfo = document.querySelector(".userInfo");
const profilePicIcons = document.querySelectorAll(".profilePic");

for (const profilePic of profilePicIcons) {
    profilePic.addEventListener('click', () => {
        userInfo.classList.toggle('hidden');
        signUpModal.classList.add('hidden');
        loginModal.classList.add('hidden')
    });
}



//toggle menu
//header ends

//getting data from firebase firestore

const grid3Container = document.querySelector(".grid3Container");
let grid3ContainerTemplate = '';
    const getCareerData = (getData) =>{

        for (const doc of getData) {
            var post = doc.data();
            grid3ContainerTemplate += `
            <a href="details.html?id=${post.uid}"><div class="mb-4 border border-gray-400 p-3 rounded overflow-hidden cursor-pointer">
            <div class="  ">
                <img class="rounded object-cover " src="${post.imageLink}" alt="please input a correct image link">
            </div>
        
            <div class="">
                <span class="text-blue-500 uppercase">${post.category}</span>
                <h2 class="md:text-2xl text-white font-medium mt-3">
                    ${post.title.slice(0,60)}...
                </h2>
                <p class="text-gray-500 truncate mt-3">
                ${post.body}
                </p>
            <div class="m-2 flex text-gray-500"> 
                <img class="h-8 rounded-full mr-4" src="./images/favicon.jpg" alt="">
                <span> ${post.author}</span>
            </div>
            <div class=" text-sm text-white flex">
                <span class="mr-2"> ${post.currentTime}</span>
                <span class="mr-2">•</span>
                <span> ${post.readTime}</span>
            </div>
            </div>
        </div>
        </a>        
            `
            grid3Container.innerHTML = grid3ContainerTemplate;
                
        }

    }
const recentPost = document.querySelector(".recentPost");
let recentPostDataTemplate = '';
const getRecentPostData = (getData) =>{
        for (const doc of getData) {
            var post = doc.data();
            recentPostDataTemplate += `        
            <a href="details.html?id=${post.id}"> <div class=" hover:shadow-2xl p-4 grid grid-cols-1  md:grid-cols-3 md:gap-4 mt-10 mb-10 m-3 cursor-pointer">
            <div class=" col-span-2 overflow-hidden">
                <img class=" blah rounded md:rounded-lg object-cover w-full md:h-96" src="${post.imageLink}" alt="">
            </div>
            <div class="m-4 ">
                <span class="text-blue-500 uppercase">${post.category}</span>
                <h2 class="md:text-4xl text-white font-medium mt-3">
                ${post.title.slice(0,100)}...
                </h2>
                <p class="text-gray-500 truncate mt-3">
                ${post.body}
                </p>
            <div class="m-2 flex text-gray-500"> 
                <img class="h-8 rounded-full mr-4" src="./images/favicon.jpg" alt="">
                <span>${post.author}</span>
            </div>
            <div class="text-sm text-white flex">
                <span class="mr-2">${post.currentTime}</span>
                <span class="mr-2">•</span>
                <span>${post.readTime}</span>
            </div>
            </div>
    
        </div></a>     
            `               
        }
        recentPost.innerHTML = recentPostDataTemplate;

    }


const recentDevPost = document.querySelector(".recentDevPost")
let recentDevPostTemplate = '';
const getRecentDevPostData = (getData) =>{
        for (const doc of getData) {
            var post = doc.data();
            recentDevPostTemplate += ` 
            <a href="details.html?id=${post.id}"> <div class=" hover:shadow-2xl p-4 grid grid-cols-1  md:grid-cols-3 md:gap-4 mt-10 mb-10 m-3 cursor-pointer">
            <div class="m-4 ">
                <span class="text-blue-500 uppercase">${post.category}</span>
                <h2 class="md:text-4xl text-white font-medium mt-3">
                ${post.title.slice(0,50)}...
                </h2>
                <p class="text-gray-500 truncate mt-3">
                ${post.body}
                </p>
            <div class="m-2 flex text-gray-500"> 
                <img class="h-8 rounded-full mr-4" src="./images/favicon.jpg" alt="">
                <span>${post.author}</span>
            </div>
            <div class="text-sm text-white flex">
                <span class="mr-2">${post.currentTime}</span>
                <span class="mr-2">•</span>
                <span>${post.readTime}</span>
            </div>
            </div>
        <div class=" col-span-2 overflow-hidden">
            <img class=" blah rounded md:rounded-lg object-cover w-full md:h-96" src="${post.imageLink}" alt="">
        </div>
        </div></a>     

            `            
        }
        recentDevPost.innerHTML = recentDevPostTemplate;

    }



const developmentPosts = document.querySelector(".developmentPosts");
let developmentPostsTemplate = '';
const getDevelopmentData = (getData) =>{
    for (const doc of getData) {
        var post = doc.data();
            developmentPostsTemplate +=  `   
            <a href="details.html?id=${post.id}"> <div class=" border border-gray-400 p-3  mb-10 overflow-hidden cursor-pointer">
            <div>
                <img class="rounded md:rounded-lg object-cover w-full md:h-64 " src="${post.imageLink}" alt="">
            </div>

            <div class="">
                <span class="text-blue-500 uppercase">${post.category}</span>
                <h2 class="md:text-2xl text-white font-medium mt-3">
                ${post.title.slice(0,60)}...
                </h2>
                <p class="text-gray-500 truncate mt-3">
                ${post.body}
                </p>
            <div class="m-2 flex text-gray-500"> 
                <img class="h-8 rounded-full mr-4" src="./images/favicon.jpg" alt="">
                <span>${post.author}</span>
            </div>
            <div class="text-sm text-white flex">
                <span class="mr-2">${post.currentTime}</span>
                <span class="mr-2">•</span>
                <span>${post.readTime}</span>
            </div>
            </div>
        </div></a>
            `
    }
            developmentPosts.innerHTML = developmentPostsTemplate;
}

const allMarketingPosts = document.querySelector(".allMarketingPosts");
let allMarketingPostsTemplate = '';
const getMarketingData = (getData) =>{
    for (const doc of getData) {
        var post = doc.data();
        allMarketingPostsTemplate += `
        <a href="details.html?id=${post.id}"><div class="mb-10 border border-gray-400 p-3 overflow-hidden cursor-pointer">
        <div>
            <img class="rounded md:rounded-lg object-cover w-full md:h-64 " src="${post.imageLink}" alt="">
        </div>

        <div class="">
            <span class="text-blue-500 uppercase">${post.category}</span>
            <h2 class="md:text-2xl text-white font-medium mt-3">
            ${post.title.slice(0,60)}...
            </h2>
            <p class="text-gray-500 truncate mt-3">
            ${post.body}
            </p>
        <div class="m-2 flex text-gray-500"> 
            <img class="h-8 rounded-full mr-4" src="./images/favicon.jpg" alt="">
            <span>${post.author}</span>
        </div>
        <div class="text-sm text-white flex">
            <span class="mr-2">${post.currentTime}</span>
            <span class="mr-2">•</span>
            <span>${post.readTime}</span>
        </div>
        </div>
    </div></a>
        `
    }
    allMarketingPosts.innerHTML = allMarketingPostsTemplate;
}
