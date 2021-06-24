const form = document.querySelector('form');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var currentTime = new Date();
var date = currentTime.getDate()+' '+ monthNames[currentTime.getMonth()]+' '+currentTime.getFullYear();
document.querySelector("#currentTime").value = date;

window.calcRT = ev => {
    const wordsPerMinute = 200; // Average case.
    let result = "";
    
    let textLength = ev.value.split(" ").length; // Split by words
    if(textLength > 0){
      let value = Math.ceil(textLength / wordsPerMinute);
      result = `${value} min read`;
      console.log()
    }
      document.querySelector("#readTime").value = result;
  };

const createPost = form.addEventListener('submit',  (e) => {
    e.preventDefault();
    db.collection("blogs").add({
        category: form['category'].value,
        title: form['title'].value,
        body: form['body'].value,
        imageLink: form['imageLink'].value,
        author: form['author'].value,
        readTime: form['readTime'].value,
        currentTime: form['currentTime'].value
  }).then(() => {
    window.location.replace('/public/index.html');
  })
});
