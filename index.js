window.onload = function() {
    const submitButton = document.getElementById("submit");
    const myList = document.querySelector('#myList');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        let number = parseFloat(document.getElementById("number").value);
        let list = [];

        for (let i = 0; i < number; i++) {
            let item = window.prompt("Enter an item in the list");
            list.push(item);
        }

        let sortedList = sortItems(list);
        createSortedList(sortedList, myList);
    });

    function sortItems(list) {
        return list.sort();
    }

    function createSortedList(sortedList, myList) {
        myList.innerHTML = ''; 

        sortedList.forEach(function(item) {
            let listItem = document.createElement("li");
            listItem.textContent = item;
            myList.appendChild(listItem); 
        });
    }
}