let counter = 0 ;

function Like(){
const liked = document.querySelector("#liked")

counter=1;
liked.innerHTML = counter;
if (counter === 1){
    counter--
}

}
export default Like