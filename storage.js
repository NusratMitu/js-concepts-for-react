// localStorage.setItem('userId', 8759221);
const addToLocalStorage = () => {
    const id = document.getElementById('storage-id').value;
    const value = document.getElementById('storage-value').value;
    if(id && value){
        localStorage.setItem(id, value);
    }
    // clear
    document.getElementById('storage-id').value='';
    document.getElementById('storage-value').value='';
}

// to store an array
localStorage.setItem('friends', JSON.stringify(['sakib','rakib']));
// to store a object
localStorage.setItem('friend', JSON.stringify({name:'sakib', age:12}));

// to get an item
JSon.parse(localStorage.getItem('friend'));