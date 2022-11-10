let counter = 0;
function commentController(){
    const commentContainer = document.querySelector("#comment-container")

    if (counter === 0){
        commentContainer.classList.remove("hidden")
        counter++
    } else{
        commentContainer.classList.add("hidden")
        counter--
    }
}

export default commentController