db.collection('blogs').limit(1).onSnapshot((querySnapshot) => {
    getRecentPostData(querySnapshot.docs);
});
db.collection('blogs').where('category', '==', 'development').limit(1).onSnapshot((querySnapshot) => {
    getRecentDevPostData(querySnapshot.docs);
});
db.collection('blogs').where('category', '==', 'career').onSnapshot((querySnapshot) => {
    getCareerData(querySnapshot.docs);
});
db.collection('blogs').where('category', '==', 'marketing').onSnapshot((querySnapshot) => {
    getMarketingData(querySnapshot.docs)
});
db.collection('blogs').where('category', '==', 'development').onSnapshot((querySnapshot) => {
    getDevelopmentData(querySnapshot.docs)
});
const whenLoggedIn = document.querySelectorAll('.whenLoggedIn');
const whenLoggedOut = document.querySelectorAll('.whenLoggedOut');

//manage users 
auth.onAuthStateChanged( user => {
    // var user = auth.currentUser;
    if(user){
        const userInfo = document.querySelector(".userInfo");
        let userInfoTemplate = '';
        userInfoTemplate += `
        <div class="relative text-center m-8 text-xl">
        <h1>
            Logged In Us <br> ${user.email}
        </h1>
    </div>
        `
        userInfo.innerHTML = userInfoTemplate;
        whenLoggedIn.forEach(menu => menu.classList.remove('hidden'));
        whenLoggedOut.forEach(menu => menu.classList.add('hidden'));
    }else{
        whenLoggedIn.forEach(menu => menu.classList.add('hidden'));
        whenLoggedOut.forEach(menu => menu.classList.remove('hidden'));
        userInfo.classList.add('hidden')
    }
});

// submit form
//sign up form
const signUpForm = document.querySelector('#signUpForm');
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // const signUpUsername = signUpForm['signUpUsername'].value;
    const signUpEmail = signUpForm['signUpEmail'].value;
    const  signUpPassword= signUpForm['signUpPassword'].value;   
  
    auth.createUserWithEmailAndPassword( signUpEmail, signUpPassword).then(userCredentials => {
        const signUpModal = document.querySelector('.signUpModal')
        signUpModal.classList.add('hidden');
        signUpForm.reset();
        console.log(userCredentials)
    });
})

// logout user

const logoutBtns = document.querySelectorAll('.logout');

for (const logout of logoutBtns) {
    logout.addEventListener('click', (event) =>{
        event.preventDefault();
        auth.signOut().then( () =>{
            alert(`User has just been logged out`)
        })
    })
}
// login form


const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginEmail = loginForm['loginEmail'].value;
    const loginPassword = loginForm['loginPassword'].value;


    auth.signInWithEmailAndPassword( loginEmail, loginPassword ).then(userCredentials => {

        alert('User has jut been logged in')
        const loginModal = document.querySelector('.loginModal');
        loginModal.classList.add('hidden');
        loginForm.reset();

    })
})


// submit form


//create
