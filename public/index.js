
const root = document.getElementById('root');
root.className = "container"

//         first row  header + main movie
const firstRow = document.createElement("div");
firstRow.className = "item-a"

const header = document.createElement("div");
header.className = "navbar header";

header.innerHTML += `<div class = "label"><img src="logo.png" style  = "height: 100px"></div>`;
headerStr = ["Главная","Фильмы","Сериалы","Избранное"]
headerStr.forEach((str) => {
    header.innerHTML += `<div class = "label">${str}</div>`;
});
header.innerHTML += `<img src="lupa.png" class = "label" style  = "height: 30px"><input type="text" class ="label" name="search" placeholder="Search..">`
firstRow.appendChild(header)
root.appendChild(firstRow)


const mainMovie = document.createElement("div");
mainMovie.className = "mainMovie";

firstRow.appendChild(mainMovie)









root.className = "container";
const div = document.createElement('div');
div.className = "";
root.appendChild(div);

div.innerHTML += ``


/*
function ajax(method, url, body = null, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        callback(xhr.status, xhr.responseText);
    });

    if (body) {
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf8');
        xhr.send(JSON.stringify(body));
        return;
    }

    xhr.send();
}*/

/*const div = document.createElement('div');
div.className = "item-c";
root.innerHTML += `<div class="item-c">CCCC</div>`
    //root.innerHTML = '';*/






