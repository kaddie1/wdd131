// document.getElementById('todoInput').addEventListener('keypress', function (e) 
// {

//     if(e.key === 'Enter')
//     {

//         const newListItem = document.createElement('li');
//         newListItem.innerHTML = document.getElementById('todoInput').value;
//         document.getElementById('todoInput').value = '';
//         //newListItem.classList.add('beautifulListItem)
//         document.getElementById('myTodos').appendChild(newListItem);




//     }


// });



document.getElementById('todoInput').addEventListener('keypress', function (e) 
{

    if(e.key === 'Enter')
    {

        const newListItem = document.createElement('li');
        newListItem.innerHTML = document.getElementById('todoInput').value;
        document.getElementById('todoInput').value = '';
        //newListItem.classList.add('beautifulListItem)
        document.getElementById('myTodos').appendChild(newListItem);




    }


});



document.getElementById('deleteAllBtn').addEventListener('click', function ()
{
    document.getElementById('myTodos').innerHTML= '';


});



function 




)