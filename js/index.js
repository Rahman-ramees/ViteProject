
import randomWords from 'random-words';

const app = document.querySelector('#app');

app.innerHTML = `
<h1>Random Names</h1>
<p id="word"></p>
<button id="nextBtn">Next</button>
<button id="fav">fav</button>
<ul class="ul-dis"></ul>
`;

let ul = document.querySelector('.ul-dis')

const nextBtn = document.querySelector('#nextBtn');

const favbtn = document.querySelector('#fav');

nextBtn.addEventListener('click', getNext);


function getNext() {

    var next = randomWords();
    console.log(next);

    console.log(next);
    document.querySelector('#word').innerText = next;




    favbtn.addEventListener('click', getfav);
    function getfav() {

        let h2 = document.createElement('h2')
        let li = document.createElement('li')

        h2.innerText = next


        li.appendChild(h2)
        // h2.innerText = prevent('default')
        ul.appendChild(li)

    }
}