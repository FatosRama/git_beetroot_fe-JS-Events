let table = document.getElementById("dataTable");
let tableBody = document.querySelector("tbody");
let headers = document.querySelectorAll("th");
let sortDirections={};
headers.forEach(th => {
    th.addEventListener("click", ()=>{
        let index = th.cellIndex;
        let allRows = tableBody.querySelectorAll("tr");
        sortDirections[index] = (sortDirections[index] === "asc") ? "desc" : "asc";
        let arrayRows = [...allRows];

        arrayRows.sort((rowA, rowB) =>{
            let a = rowA.cells[index].textContent.trim();
            let b = rowB.cells[index].textContent.trim();
            if (index === 1 || index === 2) { 
                a = Number(a);
                b = Number(b);
            }

            if (sortDirections[index] === "asc") {
                return a > b ? 1 : -1;  
            } else {
                return a < b ? 1 : -1;  
            }
        });


        arrayRows.forEach(row => tableBody.appendChild(row));
            
        
       
        
    });
});



// let rows = tableBody.querySelector("tr");
        // rows.forEach(tr => {
        //     console.log(tr);
        // })


         // let firstElem = allRows[0].querySelectorAll("td");
        // console.log(firstElem[1]);


        // allRows.forEach(data =>{
        //         let td = data.querySelectorAll("td");
        //         console.log(td[index].textContent);

        //     })