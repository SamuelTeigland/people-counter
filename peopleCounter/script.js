reset = document.getElementById("saveEl").textContent;

function increment() {
    var add = document.getElementById("count").innerHTML;
    add++;
    document.getElementById("count").innerHTML = add;
    console.log(add);
}

function decrement() {
    var subtract = document.getElementById("count").innerHTML;
    subtract--;

    if (subtract < 0) {
        alert("You cannot have a negative amount of people!");
        console.log("ERROR: You cannot have a negative amount of people!");
        subtract = 0;
    }

    document.getElementById("count").innerHTML = subtract;
    console.log(subtract);
}

function save() {
    var save = document.getElementById("count").innerHTML;
    console.log(save + " people have been saved to the console!");
    var saveEl = document.getElementById("saveEl");
    var countStr = " " + save + " - ";
    saveEl.textContent += countStr;
    document.getElementById("count").textContent = 0;
}

function clearAll() {
    document.getElementById("count").textContent = 0;
    document.getElementById("saveEl").textContent = reset;
    console.log("Cleared all entries!");
}