const addMessage = document.querySelector(".message");
const addButton = document.querySelector(".add");
const todo = document.querySelector(".todo");
const delAllButton = document.querySelector(".delete");
let allTasks = document.querySelector(".result");

// массив данных списка
let todoList = [
  {
    id: 1,
    todo: 'Добавить кнопку "Удалить все"',
    checked: true,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "27.11.23",
  },
  {
    id: 2,
    todo: 'Добавить кнопку "Удалить одну задачу"',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    id: 3,
    todo: 'Добавить переключатель "Отображать/скрывать исполненные поручения"',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    id: 4,
    todo: 'Выводить информацию "Задач всего, из них исполнено"',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    id: 5,
    todo: "Важные задачи (important) выделять визуально (или стилем текста или фоном или границей или др.)",
    checked: true,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    id: 6,
    todo: "Обеспечить возможность пометки задачи как важной",
    checked: true,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    id: 7,
    todo: 'Добавить кнопку "Редактировать", позволяющую изменить текст, важность и прочие параметры задачи',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    id: 8,
    todo: 'Добавить поля "Дата постановки задачи", "Дата исполнения", отображать их, обеспечить заполнение при создании, при исполнении, чистку при снятии с исполнения',
    checked: false,
    important: true,
    assignmentDate: "28.11.23",
    performDate: "",
  },
  {
    id: 9,
    todo: "Увеличить ширину отображения задач",
    checked: false,
    important: false,
    assignmentDate: "28.11.23",
    performDate: "",
  },
  {
    id: 10,
    todo: "Обеспечить отображение задач при запуске сайта",
    checked: false,
    important: false,
    assignmentDate: "28.11.23",
    performDate: "",
  },
  {
    id: 11,
    todo: "Добавить параметр ТрудоёмкостьЗадачи, оценивать её по пятибальной системе",
    checked: false,
    important: true,
    assignmentDate: "28.11.23",
    performDate: "",
  },

  {
    id: 12,
    todo: "Реализовать вывод стат.отчёта, сколько задач в день закрывалось за отчетный период",
    checked: false,
    important: true,
    assignmentDate: "",
    performDate: "",
  },
  {
    id: 13,
    todo: "Вывести список задач в отдельный модуль, импортировать его из основного скрипта",
    checked: false,
    important: true,
    assignmentDate: "28.11.23",
    performDate: "",
  },
];

displayAllElements();


function getTaskHTML(item) {
  return `
    <input type="checkbox" id="item_${item.id}" ${item.checked ? "checked" : ""}>
    <label for="item_${item.id}" class='${item.important ? "important" : ""}'>
      ${item.todo} 
    </label>
    <button class="edit" id="eb_${item.id}">Edit</button>
    <button class="delElement" id="db_${item.id}"> X </button>
  `;
}

function renderTasksCount() {
  const count = todoList.length;
  allTasks.textContent = `Всего задач : ${count}`;
}




function renderElement(item, id) {  
  
  const li = document.createElement("li");
  li.innerHTML = getTaskHTML(item);
  todo.appendChild(li);

  addMessage.value = "";
 
  const editButton = document.getElementById(`eb_${id}`);
  const deleteButton = document.getElementById(`db_${id}`);

    editButton.onclick = () => {
      // В разработке
    const label = li.querySelector("label");
    label.contentEditable = true;
    label.focus();

    label.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            saveChanges();  
        }
    });

    label.addEventListener("blur", function() {
        saveChanges();
    });

    const saveChanges = () => {
        label.contentEditable = false;
        item.todo = label.innerText.trim();
    };
};

  deleteButton.onclick = (value) => {
    console.log("value", value)
     todoList.length--;
    allTasks.textContent = `Всего задач: ${todoList.length} `;
    todo.removeChild(li);
       todoList.splice();
  };

  renderTasksCount();
}


function newTask() {
  //сначала найдем максимальное значение id в maxId
  let maxId = -1;
  for (const item of todoList) {
    if (item.id > maxId) maxId = item.id;
  }
  content = addMessage.value
  //возвратим новую задачу со сгенерированным id
  return {
    id: maxId + 1,
    todo: content,
    checked: false,
    important: false,
    assignmentDate: "",
    performDate: "",
  };
}


addButton.addEventListener("click", function () {

  if (addMessage.value.trim()) {
    const newTodo = newTask();
    todoList.push(newTodo);
    renderElement(newTodo, todoList.length - 1);
    addMessage.value = ""; 
  } else {
    alert("Введите текст задачи!");
  }

});

function displayAllElements() {
    todoList.forEach(function (item) {
      // return getTaskHTML(item);
      renderElement(item, item.id);
    })
    ;
   
  renderTasksCount();
}

// При нажатии на элемент правой кнопкой мышки, помечается Важным
todo.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  todoList.forEach(function (item) {
    if (item.todo === event.target.innerHTML) {
      item.important = !item.important;
      displayAllElements();
    }
  });
});

// Удаление задач
delAllButton.addEventListener("click", function () {
  todoList.splice(0, todoList.length);
  allTasks.innerHTML = "Задач нет";
  todo.innerHTML = "";
});
