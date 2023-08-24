document.getElementById('generateButton').addEventListener('click', function () {
    const fileInput = document.getElementById('fileInput');
    const outputDiv = document.getElementById('output');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const image = new Image();
            image.src = e.target.result;

            image.onload = function () {
                outputDiv.innerHTML = '';

                for (let i = 0; i < 5; i++) {
                    const imageBox = document.createElement('div');
                    imageBox.classList.add('image-box');
                    const img = document.createElement('img');
                    img.src = image.src;
                    imageBox.appendChild(img);

                    outputDiv.appendChild(imageBox);
                }
            };
        };

        reader.readAsDataURL(file);
    }
});