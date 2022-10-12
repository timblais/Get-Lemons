const deleteBtn = document.querySelectorAll('.del')
const groceryIsIncomplete = document.querySelectorAll('span.not')
const groceryIsComplete = document.querySelectorAll('span.completed')
const recipeEdit = document.querySelectorAll('.editRecipe')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', removeItem)
})

Array.from(groceryIsIncomplete).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(groceryIsComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

Array.from(recipeEdit).forEach((el) => {
    el.addEventListener('click', editRecipe)
})

async function removeItem(){
    const itemId = this.parentNode.dataset.id
    try{
        const response = await fetch('home/removeItem', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'itemIdFromJSFile': itemId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const itemId = this.parentNode.dataset.id
    try{
        const response = await fetch('home/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'itemIdFromJSFile': itemId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const itemId = this.parentNode.dataset.id
    try{
        const response = await fetch('home/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'itemIdFromJSFile': itemId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function editRecipe(){
    const recipeId = this.parentNode.dataset.id
    try{
        const response = await fetch('recipes/edit',{
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'recipeIdFromJSFile': recipeId
            })
        })
    }catch(err){
        console.log(err)
    }
}