let getViewer = document.getElementById("view-textfield");
let getEditor = document.getElementById("edit-textfield");


document.addEventListener("keydown", function(e){
    if(e.ctrlKey && e.key === "e"){
        e.preventDefault();
        getViewer.style.display="none";
        getEditor.style.display="block";
        getEditor.value = getViewer.innerHTML;
    }
    if(e.ctrlKey && e.key==="s"){
        e.preventDefault();
        getEditor.style.display="none";
        getViewer.style.display="block";
        getViewer.innerHTML = getEditor.value;
    }
}
)