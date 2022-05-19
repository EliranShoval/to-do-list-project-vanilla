let button = document.getElementById('addList');
button.innerText ="Add Lists"
let inputTag = document.getElementById('addContent');
console.log(inputTag);
let removeElement = document.getElementById('removeList');
removeElement.innerText = 'Remove Lists'

button.addEventListener('click',() =>{
        let contentTag = document.createElement('p');
        contentTag.setAttribute('id','create-content')
        contentTag.innerText = inputTag.value;
        document.body.append(contentTag);

        if(inputTag.value <=0){
            alert('Write the content in the input!');
            contentTag.remove();
        }

        removeElement.addEventListener('click',function(){
            contentTag.remove();
        })

})

function footerText(){
    let footer = document.createElement('p').innerText = 'Made by 🧡 Eliran Shoval';
    document.body.append(footer);
}
footerText()

function addTitle(){
    let mainTitle = document.querySelector('h1').innerText;
    document.querySelector('title').innerText = mainTitle;
}
addTitle();

function createDescription(){
    let description = document.createElement('meta');
    description.setAttribute('name','description');
    description.setAttribute('content','description tags is very important for SEO');
    document.head.append(description);
}
createDescription();