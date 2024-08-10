function singleImageload(input) {
    const previewTitle = document.querySelector("#preview-single-image-title");
    const previewImg = document.querySelector("#preview-single-image");
    if(input.files.length > 0) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function(data) {
            previewImg.src = data.target.result;
        }
        previewTitle.style.display = "none";
        previewImg.style.display = "block";
        reader.readAsDataURL(file);
    }
}

function multipleImageload(input) {
    const previewTitle = document.querySelector("#preview-multiple-image-title");
    const previewImg = document.querySelector("#preview-multiple-image");
    if(input.files.length > 0) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function(data) {
            previewImg.src = data.target.result;
        }
        previewTitle.style.display = "none";
        previewImg.style.display = "block";
        reader.readAsDataURL(file);
    }
}

document.getElementById('submitButton').onclick = function() {
    alert('hi');
    // var newImage = document.getElementById('image-show').lastElementChild;
    // newImage.style.visibility = "visible";
    // document.getElementById('uploadForm').style.visibility = 'hidden';
    // document.getElementById('fileName').textContent = null;
};