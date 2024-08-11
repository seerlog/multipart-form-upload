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
    const previewMainImg = document.querySelector("#preview-multiple-image");
    const previewTitle = document.querySelector("#preview-multiple-image-title");
    const previewSubImgs = document.querySelector("#preview-sub-images"); 
    previewSubImgs.innerHTML = '';

    if(input.files.length > 0) {   
        const mainReader = new FileReader();
        mainReader.onload = function(data) {
            previewMainImg.src = data.target.result;
        }
        previewTitle.style.display = "none";
        previewMainImg.style.display = "block";
        mainReader.readAsDataURL(input.files[0]);

        for (let i = 1; i < input.files.length; i++) {
            const subReader = new FileReader();
            subReader.onload = function(data) {
                const subImg = document.createElement('img');
                subImg.src = data.target.result;
                subImg.classList.add('preview-sub-image');
                previewSubImgs.appendChild(subImg);
            }
            subReader.readAsDataURL(input.files[i]);
        }
    }    
}

document.getElementById('submitButton').onclick = function() {
    alert('hi');
    // var newImage = document.getElementById('image-show').lastElementChild;
    // newImage.style.visibility = "visible";
    // document.getElementById('uploadForm').style.visibility = 'hidden';
    // document.getElementById('fileName').textContent = null;
};