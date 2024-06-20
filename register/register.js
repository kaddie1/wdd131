import {newParticipant, successTemplate} from './Templates.js';


//Chatgpt and the tutor helped me

let participantCounter =0;

document.addEventListener("DOMContentLoaded", function () {
    // Initialize participant counter
    participantCounter = 1;
  
    // Get Add Participant button
    const addButton = document.getElementById("addparticipant");
    
  
    // Handle click on Add Participant button
    addButton.addEventListener("click", function () {
      participantCounter++;

      // Create a new participant section and append it where needed
    const newParticipantSection = document.createElement('section');
    newParticipantSection.classList.add(`participant${participantCounter}`);
    newParticipantSection.innerHTML = newParticipant(participantCounter);
    let content = newParticipant(participantCounter);
    // Append new section to the container
    const participantsContainer = document.getElementById('participantsContainer');
   // participantsContainer.insertAdjacentHTML("beforeend",content);
    participantsContainer.insertBefore(newParticipantSection, addButton);

   

    
    });


        // Get Submit button
  const submitform = document.getElementById("form");
 
  // Handle click on Add Participant button
  submitform.addEventListener("submit", function (event) {
   event.preventDefault();
   //console.log("test")
   

   //const submitform = document.getElementById("form");
   submitform.style.display = "none";

   const adult_name = document.getElementById("adult_name").value;
   
   let total_fees= totalFees();
   //console.log(total_fees);
   let info = {
    total:total_fees,
    numberOfParticipants: participantCounter,
    adultName: adult_name

   }

  let info_success = successTemplate(info)

  const summary_info = document.getElementById("summary")
  console.log(summary_info)

  summary_info.innerHTML = info_success


  });
 
});



//create a function called new Participant 
// function newParticipant(count)
// {

//   return `<section class="participant1">
//             <p>Participant ${count}</p>
//             <div class="item">
//               <label for="fname"> First Name<span>*</span></label>
//               <input id="fname ${count}" type="text" name="fname" value="" required />
//             </div>
//             <div class="item activities">
//               <label for="activity">Activity #<span>*</span></label>
//               <input id="activity ${count}" type="text" name="activity" />
//             </div>
//             <div class="item">
//               <label for="fee">Fee ($)<span>*</span></label>
//               <input id="fee${count}" type="number" name="fee" />
//             </div>
//             <div class="item">
//               <label for="date">Desired Date <span>*</span></label>
//               <input id="date ${count}" type="date" name="date" />
//             </div>
//             <div class="item">
//               <p>Grade</p>
//               <select>
//                 <option selected value="" disabled selected></option>
//                 <option value="1">1st</option>
//                 <option value="2">2nd</option>
//                 <option value="3">3rd</option>
//                 <option value="4">4th</option>
//                 <option value="5">5th</option>
//                 <option value="6">6th</option>
//                 <option value="7">7th</option>
//                 <option value="8">8th</option>
//                 <option value="9">9th</option>
//                 <option value="10">10th</option>
//                 <option value="11">11th</option>
//                 <option value="12">12th</option>
//               </select>
//             </div>
//           </section>`

// }

//calling the new participant function
newParticipant(participantCounter)



// Function to generate success message template
// function successTemplate(info) {
//   return `<div class="success-message">
//             <p>Registration successful!</p>
//             <p>Adult Name: ${info.adultName}</p>
//             <p>Number of Participants: ${info.numberOfParticipants}</p>
//             <p>Total Fee: $${info.total}</p>
//           </div>`;

         

//     //"Thank you ${info.adultName} for registering. You have registered ${info.numberOfParticipants} participants and owe ${info.feeTotal} in Fees."
//         }


//OPTION 2
function totalFees() {
  // Select all elements whose id starts with "fee"
  let feeElements = document.querySelectorAll("[id^=fee]");
  
  // Convert NodeList to Array using spread operator
  feeElements = [...feeElements];
  
  // Initialize total sum
  let total = 0;
  
  // Iterate over each fee element
  feeElements.forEach(element => {
      // Extract the numeric value from element's value or textContent
      let value = parseFloat(element.value || element.textContent);
      
      // Add to total if it's a valid number
      if (!isNaN(value)) {
          total += value;
      }
  });
  
  // Return the calculated total
  return total;
}