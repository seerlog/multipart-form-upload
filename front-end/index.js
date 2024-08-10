function loadFile(input) {
    var file = input.files[0];
    var name = document.getElementById('fileName');
    name.textContent = file.name;

    var newImage = document.createElement("img");
    newImage.src = URL.createObjectURL(file);
    newImage.style.visibility = "hidden";

    var container = document.getElementById('image-show');
    container.appendChild(newImage);
}

document.getElementById('submitButton').onclick = function() {
    alert('hi');
    // var newImage = document.getElementById('image-show').lastElementChild;
    // newImage.style.visibility = "visible";
    // document.getElementById('uploadForm').style.visibility = 'hidden';
    // document.getElementById('fileName').textContent = null;
};