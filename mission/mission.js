
/* I got help from the code in class */

document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('theme');

    selectElement.addEventListener('change', function () {

        const selectedValue = this.value;
        if (selectedValue === 'dark') {
            document.body.classList.add('dark');
        } /* end if*/

        else
        {
            document.body.classList.remove('dark');
            
        }

    });
});