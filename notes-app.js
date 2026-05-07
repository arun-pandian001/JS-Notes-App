var arr = JSON.parse(localStorage.getItem("Notes")) || []; // LocalStorage check
var a = document.getElementById('ans');
var nam = document.getElementById('name');
var con = document.getElementById('context');
var rem = document.getElementById('remove');
var pop = document.getElementById('popup');
var ent = document.getElementById('enter');
var btn = document.getElementById('btn');

// Show Popup
btn.addEventListener('click', () => {
    pop.style.display = "flex"; // 'flex' use panna dhaan center aagum
});

// Close Popup
rem.addEventListener('click', () => {
    pop.style.display = "none";
    nam.value = "";
    con.value = "";
});

// Enter Logic
ent.addEventListener('click', () => {
    if (nam.value == "" || con.value == "") {
        alert("INVALID DATA'S");
    } else {
        notemake(nam.value, con.value);
    }
});

function notemake(N, C) {
    pop.style.display = "none";
    var space = document.createElement('div');
    space.setAttribute("id", "container");
    space.innerHTML = <h3>${N}</h3> <p>${C}</p>
    <button class='clr'>clear</button>;
    a.appendChild(space);

    // Initial load-la duplicate aagama irukka check
    if (!arr.includes(N) || !arr.includes(C)) {
        arr.push(N, C);
        localStorage.setItem("Notes", JSON.stringify(arr));
    }

    let cl = space.querySelector('.clr');
    cl.addEventListener('click', () => {
        space.remove();
        arrclear(N);
    });

    nam.value = "";
    con.value = "";
}

function arrclear(N) {
    var index = arr.indexOf(N);
    if (index > -1) {
        arr.splice(index, 2);
        localStorage.setItem("Notes", JSON.stringify(arr));
    }
}

// Window Load
window.onload = () => {
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i += 2) {
            notemake(arr[i], arr[i + 1]);
        }
    }
};
