let submitBtn = document.querySelector("#submit");
let msg = document.getElementById("here");
let form = document.querySelector("#form")
form.style.display = "none";
let addBtn = document.querySelector("#add_btn");
let inputData = [];
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let page = document.querySelector("#page");
let radioButtion = document.getElementsByName("read");
let card = document.querySelector("#main_card");
let articleCard = document.querySelector("#main_card");
let user = new Array();
// card.style.display = "none";


function addBookToLibrary() {

    class book {
        constructor(title, author, page) {
            this.title = title;
            this.author = author;
            this.page = page;
        }
        get test() {
            return this.getThis();
        }
        getThis() {
            for (let i = 0; i < radioButtion.length; i++) {
                if (radioButtion[i].checked) {
                    return radioButtion[i].value;
                }
            }
        };

    }

    user = new book(title.value, author.value, page.value);
    inputData.push(` title: ${user.title} <br> author: ${user.author} <br> page: ${user.page} <br> Read: ${user.test}`);

    // inputData.push(input2);
    // console.log(inputData);
    // let inputLength = inputData.length
    // for (let i = 0; i < inputLength; i++) {
    //     msg.innerHTML = inputData;
    //     // console.log(inputData[i]);
    // remove();
    // let copyCard = cardClone.cloneNode(true);
    // copyCard.id = 'card_2'
    // copyCard.classList.add('card');
    // cardClone.after(copyCard);


}

function addThisCard() {
    // e.preventDefault();
    for (let i = 0; i < 1; i++) {
        let section = document.createElement("section");
        section.className = "card";
        articleCard.appendChild(section);
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");

        section.appendChild(div1);
        section.appendChild(div2);
        section.appendChild(div3);
        section.appendChild(div4);

        let head1 = document.createElement("h1");
        let head2 = document.createElement("h1");
        let head3 = document.createElement("h1");
        let head4 = document.createElement("h1");
        let title1 = document.createTextNode("Title");
        let author1 = document.createTextNode("Author");
        let page1 = document.createTextNode("Number of Page");
        let read1 = document.createTextNode("Read");

        head1.appendChild(title1);
        head2.appendChild(author1);
        head3.appendChild(page1);
        head4.appendChild(read1);

        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let test = document.createTextNode(user.title);
        p1.appendChild(test);

        div1.appendChild(head1, p1);
        div2.appendChild(head2, p2);
        div3.appendChild(head3, p3);
        div4.appendChild(head4, p4);
    }
}

submitBtn.addEventListener("click", function () {
    addBookToLibrary();
    remove();
    addThisCard();
    form.style.display = "none";
    // msg.style.display = "block";
    card.style.display = "grid"


});



function remove() {
    title.value = '';
    author.value = '';
    page.value = '';
    radioButtion.value = "";

}

function displayForm() {
    form.style.display = "block";
    // msg.style.display = "none";
    card.style.display = "none"



}
addBtn.addEventListener("click", displayForm);