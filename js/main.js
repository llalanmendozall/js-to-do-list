const words = [
  "What plan do you have today?",
  "what are you thinking?",
  "Do you have homework?",
];

const input = document.querySelector("input");
const btn = document.querySelector("#add");
const ul = document.querySelector(".list");
const empty = document.querySelector(".empty");

let listItem;
let buttonDelete;
let buttonEdit;

window.addEventListener("load", () => {
  input.setAttribute("placeholder", randomWord());
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    empty.classList.add("is_invalid");
    empty.textContent = "Introduce algo :]";
    input.focus();
  } else {
    listItem = document.createElement("li");
    listItemInput = document.createElement("input");
    listItemInput.value += input.value;
    ul.appendChild(listItem);
    listItem.appendChild(listItemInput);

    listItemInput.setAttribute("disabled", "");
    listItemInput.setAttribute("type", "text");

    listItem.appendChild(deleteElement());
    listItem.appendChild(editElement());

    input.value = "";
    input.focus();

    empty.style.display = "none";
  }
});

const deleteElement = () => {
  buttonDelete = document.createElement("button");
  deleteIcon = document.createElement("i");
  deleteIcon.classList.add("bx", "bx-x-circle");
  buttonDelete.appendChild(deleteIcon);
  buttonDelete.classList.add("btn", "btn_danger");
  buttonDelete.addEventListener("click", (e) => {
    let li = e.target.parentElement.parentElement;
    ul.removeChild(li);
    let lis = document.querySelectorAll("li");
    if (lis.length === 0) {
      empty.style.display = "block";
    }
  });
  //   retorno el boton
  return buttonDelete;
};

const editElement = () => {
  buttonEdit = document.createElement("button");
  editIcon = document.createElement("i");
  editIcon.classList.add("bx", "bx-edit-alt");

  buttonEdit.classList.add("btn", "btn_info");
  buttonEdit.appendChild(editIcon);

  buttonEdit.addEventListener("click", (e) => {
    thisParent = e.target.parentElement.parentElement;
    thisInput = thisParent.children[0];
    thisInput.value = thisInput.value;
    thisInput.toggleAttribute("disabled");

    switch (thisInput.hasAttribute("disabled")) {
      case false:
        buttonEdit.classList.remove("btn_info");
        buttonEdit.classList.add("btn_success");
        editIcon.classList.remove("bx", "bx-edit-alt");
        editIcon.classList.add("bx", "bx-save");

        break;

      default:
        buttonEdit.classList.remove("btn_success");
        buttonEdit.classList.add("btn_info");
        editIcon.classList.remove("bx", "bx-save");
        editIcon.classList.add("bx", "bx-edit-alt");
        break;
    }
  });

  return buttonEdit;
};

const randomWord = () => {
  let random = Math.floor(Math.random() * words.length);
  return words[random];
};
