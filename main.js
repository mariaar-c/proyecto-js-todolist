
const input = document.querySelector('input');
const addButton = document.querySelector('.btn-add');
const taskList = document.querySelector('ul');
const emptyMessage = document.querySelector('.empty');


const updateEmptyMessage = () => {
    if (taskList.children.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
};


const createTask = (taskText) => {
   
    const li = document.createElement('li');

  
    const p = document.createElement('p');
    p.textContent = taskText;

 
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('btn-delete');


    li.appendChild(p);
    li.appendChild(deleteButton);

 
    taskList.appendChild(li);


    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
        updateEmptyMessage();
    });

  
    input.value = '';


    updateEmptyMessage();
};


addButton.addEventListener('click', (e) => {
    e.preventDefault();


    const taskText = input.value.trim();

  
    if (taskText) {
        createTask(taskText);
    } else {
        alert('Task cannot be empty!');
    }
});


updateEmptyMessage();