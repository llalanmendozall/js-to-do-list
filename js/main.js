const input = document.querySelector("input");
const btn = document.querySelector("#add");
const ul = document.querySelector(".list");
const empty = document.querySelector(".empty");

let listItem;
let buttonDelete;
let buttonEdit;

let to_do = {};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    
    empty.classList.add('is_invalid')
    empty.textContent = 'Introduce algo :]'
    input.focus();
  } else {
    listItem = document.createElement("li");
    listItem.textContent += input.value;
    ul.appendChild(listItem);

    listItem.appendChild(deleteElement());

    input.value = "";
    input.focus();

    empty.style.display = "none";
  }
});

const deleteElement = () => {
  buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Delete";

  buttonDelete.classList.add('button_delete')
  buttonDelete.addEventListener("click", (e) => {
    let li = e.target.parentElement;
    ul.removeChild(li);
    let lis = document.querySelectorAll('li')
    if (lis.length === 0) {
    empty.style.display = "block";
    }
});
  //   retorno el boton
  return buttonDelete;
};
