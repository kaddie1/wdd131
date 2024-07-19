import food_items from './restaurant.mjs';

food_items.forEach((food_items)=>{
    // Create a food_item element and store it in a variable
    let food_items_Article = document.createElement('article')
	



	let food_items_info = `
	
    <p class = "display_name">${food_items.name}</p>
    
    <div class = "image_format">
    <img src="${food_items.image}">
    </div>
    <p class = "display_about">${food_items.About}</p>
    <p class = "display_price">Price: $ ${food_items.price}</p>
    
    `

    food_items_Article.innerHTML = food_items_info
    
    let food_items_Holder = document.getElementById("menu_layout")
    food_items_Holder.appendChild( food_items_Article)
       
        

})






//Collect form information

    // JavaScript to handle form submission
    let submitform = document.getElementById('orderform_layout')
    submitform.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Create a FormData object from the form element
        const formData = new FormData(event.target);

        

        // Get the selected value from the FormData object
        const selectedName = formData.get('name');
        const selectedCarbohydrate = formData.get('Carbohydrate');
        const selectedProtein = formData.get('Protein');
        const selectedBeverage = formData.get('Beverage');
        const selectedBeverage_q = formData.get('Beverage_quantity');
        const selectedProtein_q = formData.get('Protein_quantity');
        const selectedCarbohydrate_q = formData.get('Carbohydrate_quantity');

        let subtotal =0

        
        food_items.forEach((food_items)=>{


            if (food_items.name == selectedCarbohydrate)

            {

                subtotal =subtotal + (parseInt(food_items.price) * parseInt(selectedCarbohydrate_q))
            } //end of if

            else if (food_items.name == selectedProtein) {
                subtotal =subtotal + (parseInt(food_items.price) * parseInt(selectedProtein_q))

            }

            else if (food_items.name == selectedBeverage) {

                subtotal =subtotal + (parseInt(food_items.price) * parseInt(selectedBeverage_q))
            }

        })

        let total = 0
        let tax = 0

        tax= subtotal * 0.06
        total = subtotal + tax
        
        submitform.style.display = "none";


        let info = {
            tax: tax,
            total: total,
            subtotal: subtotal

           }

        let submit_success = successTemplate(info)

        const summary_info = document.getElementById("summary")
        console.log(summary_info)
      
        summary_info.innerHTML = submit_success
    });


    function successTemplate(info) {
        return `<div class="success-message">
                  <p>Your Order was Successful!</p>
                  <p>Subtotal: $${info.subtotal}</p>
                  <p>Tax: $${info.tax.toFixed(2)}</p>
                  <p>Total Fee: $${info.total}</p>
                  <p>Thank you for choosing Jamdown Restaurant!</p>
                </div>`;   
              }
    



