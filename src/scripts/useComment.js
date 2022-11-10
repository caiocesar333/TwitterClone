function useComment() {
    
    const commentContainer = document.querySelector("#comment-container")
    const commentInput = document.querySelector("#comment-input");
    const comment = document.querySelector("#comment");
    const comentario = document.createElement("p");

    
    let text = commentInput.value;
    
    comentario.innerHTML = text;

    comment.appendChild(comentario);

    commentContainer.classList.add("hidden")

}

export default useComment