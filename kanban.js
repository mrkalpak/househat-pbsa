
var kanbanBoard = document.getElementById('kanban-board');
var draggingCard = null;

kanbanBoard.addEventListener('dragstart', function (event) {
    draggingCard = event.target;
    draggingCard.classList.add('dragging');
});

kanbanBoard.addEventListener('dragend', function (event) {
    draggingCard.classList.remove('dragging');
    draggingCard = null;
});

kanbanBoard.addEventListener('dragover', function (event) {
    event.preventDefault();
    var columnBody = event.target.closest('.kanban-column-body');
    if (columnBody) {
        columnBody.classList.add('drag-over');
    }
});

kanbanBoard.addEventListener('dragleave', function (event) {
    var columnBody = event.target.closest('.kanban-column-body');
    if (columnBody) {
        columnBody.classList.remove('drag-over');
    }
});

kanbanBoard.addEventListener('drop', function (event) {
    event.preventDefault();
    var columnBody = event.target.closest('.kanban-column-body');
    if (columnBody && draggingCard) {
        columnBody.appendChild(draggingCard);
        columnBody.classList.remove('drag-over');
    }
});
