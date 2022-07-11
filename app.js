const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')
let cycleBin = document.querySelector('.cycleBin')
let dragableItem = null;

cycleBin.addEventListener('drop', moveToTrash)
cycleBin.addEventListener('dragover', dragover)

function moveToTrash(event) {
    console.log('Moving to trash...');
    dragableItem.remove()
}


items.forEach((item) => {
    item.addEventListener('dragstart', dragstart)
    item.addEventListener('dragend', dragend)
})

for (const placeholder of placeholders) {
    console.log(placeholder);
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    dragableItem = event.target
    console.log('drag start', event.target);
    event.target.classList.add('hold')
    cycleBin.classList.remove('hide')
    // event.target.classList.add('hide')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    console.log("drag end");
    // event.target.classList.remove('hold, hide')
    event.target.classList.remove('hold')
    event.target.classList.remove('hide')
    cycleBin.classList.add('hide')
}

function dragover(event) {
    event.preventDefault() //
    console.log("drag over");
}

function dragenter(event) {
    event.target.classList.add('hovered')
    console.log("drag enter");
}

function dragleave(event) {
    console.log("drag leave");
    event.target.classList.remove('hovered')
}

function dragdrop(event) {

    console.log("drag drop");
    event.target.append(dragableItem)
    dragableItem = null
    event.target.classList.remove('hovered')
    console.log(event.target);
}

function onClickFunction() {
    
    let click = prompt('write your task here')
    let div = document.createElement("div")
    div.innerHTML = click
    div.draggable = true
    div.classList.add("item")
    placeholders[0].appendChild(div)
    div.addEventListener('dragstart', dragstart)
    div.addEventListener('dragend', dragend)
}