let submitBtn = document.querySelector("#submit");
let msg = document.getElementById("here");
let form = document.querySelector("#form")
// form.style.display = "none";
let addBtn = document.querySelector("#add_btn");
let inputData = [];
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let page = document.querySelector("#page");
let radioButtion = document.getElementsByName("read");
let user = {};

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
    // localStorage.setItem('item', user);
    // msg.innerHTML = localStorage.getItem("item");
    msg.innerHTML = ` title: ${user.title} <br> author: ${user.author} <br> page: ${user.page} <br> Read: ${user.test}`;
    // let input = "username:" + ' ' + document.getElementById("text").value;
    // let input2 = document.getElementById("text2").value;
    inputData.push(` title: ${user.title} <br> author: ${user.author} <br> page: ${user.page} <br> Read: ${user.test}`);
    // inputData.push(input2);
    // console.log(inputData);
    // let inputLength = inputData.length
    // for (let i = 0; i < inputLength; i++) {
    //     msg.innerHTML = inputData;
    //     // console.log(inputData[i]);
    // remove();

}

submitBtn.addEventListener("click", function () {
    addBookToLibrary();
    remove();
});



function remove() {
    title.value = '';
    author.value = '';
    page.value = '';
    radioButtion.value = "";

}

function displayForm() {
    form.style.display = "flex";



}
addBtn.addEventListener("click", displayForm);