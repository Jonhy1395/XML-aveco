const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting

  const formData = new FormData(form); // get form data
  const xml = document.createElement("formdata"); // create root element

  for (const [key, value] of formData.entries()) {
    const element = document.createElement(key); // create child element
    const textNode = document.createTextNode(value); // create text node with value
    element.appendChild(textNode); // append text node to child element
    xml.appendChild(element); // append child element to root element
  }


  //const xmlString = new XMLSerializer();
  const xmlString = new XMLSerializer().serializeToString(xml)// convert to XML string
  const blob = new Blob([xmlString], {type: "text/xml"}); // create blob object
  const url = URL.createObjectURL(blob); // create URL for blob

  const link = document.createElement("a"); // create download link
  link.download = "formData.xml"; // set download file name
  link.href = url; // set URL for download link
  link.click(); // click the link to download file

  URL.revokeObjectURL(url); // release object URL
});


function addSeparators(inputId) {
    var input = document.getElementById(inputId);
    var value = input.value;

    // Remove existing separators
    value = value.replace(/:/g, '');

    // Add separators after every two characters, except at the end
    var formattedValue = value.replace(/(.{2})(?!$)/g, '$1:');

    // Update the input value
    input.value = formattedValue;
  }


let counter = 1;
const contenedor = document.querySelector("#inputContainer");
const contenedorinputs = document.querySelector("#intimeContainer");
const contenedoroutputs = document.querySelector("#OuttimeContainer");
const btnCrear = document.querySelector("#crear");

btnCrear.addEventListener('click', e => {
  let div = document.createElement('label');
  div.innerHTML = `Time Input Segmento ${counter} <input type="text" class="input" name="timeInput${counter}" id="timeInput${counter}" oninput="addSeparators('timeInput${counter}')" onkeypress="return event.charCode>=48 && event.charCode<=57" maxlength="11"></input>`

  let div1 = document.createElement('label');
  div1.innerHTML = `Time Output Segmento ${counter} <input type="text" class="input" name="timeOutput${counter}" id="timeOutput${counter}" oninput="addSeparators('timeOutput${counter}')" onkeypress="return event.charCode>=48 && event.charCode<=57" maxlength="11"></input>`

  contenedorinputs.appendChild(div);
  contenedoroutputs.appendChild(div1);
  
  counter++;
})

