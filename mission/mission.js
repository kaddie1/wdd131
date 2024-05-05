
/* I used the code from in class and chatgpt also helped me */

document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('theme');

    selectElement.addEventListener('change', function () {

        const selectedValue = this.value;

        if (selectedValue === 'dark') {
            document.body.classList.add('dark');

            var image = document.getElementById("image");
            image.src = "byuilight.png";

        } /* end if*/

        else{
            document.body.classList.remove('dark');
            
        }

    });
});