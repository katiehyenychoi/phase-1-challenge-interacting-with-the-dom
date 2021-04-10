document.addEventListener("DOMContentLoaded", function () {

    let counter = document.querySelector("h1#counter");
    let minus = document.querySelector("button#minus");
    let plus = document.querySelector("button#plus");
    let heart = document.querySelector("button#heart");
    let heartUl = document.querySelector("ul.likes");
    let pause = document.querySelector("button#pause");
    let commentForm = document.querySelector("#comment-form");
    let comments = document.querySelector("#list");
    let likedTracker = {};
    let paused = false;
    let interval = setInterval(plusCounter, 1000);
    //This line above itself just started it at sec 0 


    //functions
    function plusCounter() {
        counter.innerText = parseInt(counter.innerText) + 1;
    }
    function minusCounter() {
        counter.innerText = parseInt(counter.innerText) - 1;
    }
    function addLike() {
        let timeSec = counter.innerText;
        likedTracker[timeSec] = likedTracker[timeSec] || 0
        likedTracker[timeSec] += 1
        renderLikes()
    }
    function renderLikes() {
        heartUl.innerText = ""; //Q- can it be .innerText inst of innerHTML
        for (let key in likedTracker) {
            const li = document.createElement("li");
            li.innerText = `${key} has been liked ${likedTracker[key]} times.`;
            heartUl.append(li);
        }
    }

    function pauseClicked() {
        paused = !paused; //changing 'paused' var to true.
        if (paused) {
            clearInterval(interval); //'interval' is a let var
            pause.innerText = "resume";
        } else {
            interval = setInterval(plusCounter, 1000);
            pause.innerText = "pause";
        }
    };

    function handleSubmit(event) {
        event.preventDefault();
        const comment = event.target.querySelector("input").value;
        const li = document.createElement("li");
        li.innerText = comment;
        comments.append(li);
        event.target.reset();
    }

    // Add E.Ls
    plus.addEventListener("click", plusCounter);
    minus.addEventListener("click", minusCounter);
    heart.addEventListener("click", addLike);
    pause.addEventListener("click", pauseClicked);
    commentForm.addEventListener("click", handleSubmit);








});