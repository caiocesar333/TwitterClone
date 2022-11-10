function useComment() {

    const commentContainer = document.querySelector("#comment-container")
    const commentInput = document.querySelector("#comment-input");
    const comment = document.querySelector("#comment");
    const commentText = document.querySelector("#comment-text");
    const comentario = document.createElement("p");


    let text = commentInput.value;

    comentario.innerHTML = text;

    comment.classList.remove("hidden")
    comment.classList.add("comment")

    commentContainer.classList.remove("hidden")
    commentText.appendChild(comentario);

    commentContainer.classList.add("hidden")



}

export default useComment