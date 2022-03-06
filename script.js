let formDiv = document.getElementById("form");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let page = document.querySelector("#page_number");
let radioButtion = document.getElementsByName("read");
let articleCard = document.querySelector("#main_card");
let submitBtn = document.querySelector("#submit");
let addBtn = document.querySelector("#add_btn");
let cross = document.querySelector("#cross")
let section = document.querySelector("#section");

let user
let inputData = [];
formDiv.style.display = "none";
let counter = 0;

function addBookToLibrary() {
    class book {
        constructor(title, author, page) {
            this.title = title;
            this.author = author;
            this.page = page;

        }
        get radioCheck() {
            return this.radio();
        }
        radio() {
            for (let i = 0; i < radioButtion.length; i++) {
                if (radioButtion[i].checked) {
                    return radioButtion[i].value;
                }
            }
        };
        get thisId() {
            return this.getId();
        }

        getId() {
            for (let i = 0; i < 1; i++) {
                return section.setAttribute('data-id', counter++);
            }
        }

    }

    user = new book(title.value, author.value, page.value);
    // inputData.push(` title ${user.title} <br> author: ${user.author} <br> page: ${user.page} <br> Read: ${user.test}`);
    inputData.push(user); // push the user object into the input data 
    // inputData.push(user.author);
    // inputData.push(user.page);
    // inputData.push(user.radioCheck);

}



function createNewCard() {
    for (let i = 0; i < 1; i++) {
        section = document.createElement("section");
        section.className = "card";
        section.setAttribute('id', 'section');
        articleCard.appendChild(section);

        let div1 = document.createElement("div");
        section.appendChild(div1);
        div1.className = "card_info";

        let div2 = document.createElement("div");
        section.appendChild(div2);
        div2.className = "card_info";

        let div3 = document.createElement("div");
        section.appendChild(div3);
        div3.className = "card_info";

        let div4 = document.createElement("div");
        section.appendChild(div4);
        div4.className = "card_info";

        let head1 = document.createElement("h1");
        let title1 = document.createTextNode("Title:");
        head1.appendChild(title1);
        div1.appendChild(head1);

        let head2 = document.createElement("h1");
        let title2 = document.createTextNode("Author:");
        head2.appendChild(title2);
        div2.appendChild(head2);

        let head3 = document.createElement("h1");
        let title3 = document.createTextNode("Page:");
        head3.appendChild(title3);
        div3.appendChild(head3);

        let head4 = document.createElement("h1");
        let title4 = document.createTextNode("Read:");
        head4.appendChild(title4);
        div4.appendChild(head4);

        let p1 = document.createElement("p");
        div1.appendChild(p1);
        let p2 = document.createElement("p");
        div2.appendChild(p2);
        let p3 = document.createElement("p");
        div3.appendChild(p3);
        let p4 = document.createElement("p");
        div4.appendChild(p4);
        p1.className = "para";
        p2.className = "para";
        p3.className = "para";
        p4.className = "para";


        for (let i = 0; i < inputData.length; i++) {
            p1.innerHTML = inputData[i].title;
            p2.innerHTML = inputData[i].author;
            p3.innerHTML = inputData[i].page;
            p4.innerHTML = inputData[i].radioCheck;

        }
        user.thisId;

    }
}

// function addCustomData() {
//     let test = document.getElementById('section');
//     test.setAttribute('data-num', 0);
//     test.dataset.num++;

// }
// submitBtn.addEventListener("submit", function (e) {
//     e.preventDefault();
//     addBookToLibrary();
//     remove();
//     // addThisCard();
//     form.style.display = "none";
//     // msg.style.display = "block";
//     card.style.display = "grid"

// });



function remove() {
    // title.value = '';
    author.value = '';
    page.value = '';
    radioButtion.value = "";
    // inputData = [];
    formDiv.style.display = "none";

}

function displayForm() {
    form.style.display = "flex";
    formDiv.style.display = "grid";
    // form.style.animation = "animate 2s linear infinite";

}

addBtn.addEventListener("click", displayForm);

form.addEventListener('submit', event => {
    event.preventDefault()
    addBookToLibrary();
    formDiv.style.display = "none";
    articleCard.style.display = "grid";
    createNewCard();
    remove();
})

cross.addEventListener('click', () => {
    formDiv.style.display = "none";
    articleCard.style.display = "grid"
})