function createXmlFileFromForm(formId, fileName) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
  
    // Create the XML document
    const xmlDoc = document.implementation.createDocument("", "", null);
  
    // Create the root element
    const rootElement = xmlDoc.createElement("form-data");
    xmlDoc.appendChild(rootElement);
  
    // Iterate over form data and create XML elements
    for (const [name, value] of formData) {
      const element = xmlDoc.createElement(name);
      element.appendChild(xmlDoc.createTextNode(value));
      rootElement.appendChild(element);
    }
  
    // Serialize the XML document to a string with indentation
    const serializer = new XMLSerializer();
    const xmlString = serializer.serializeToString(xmlDoc)
      .replace(/>\s*</g, ">\n<")
      .replace(/</g, "\t<");
  
    // Create a download link for the XML file
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", "data:text/xml;charset=utf-8," + encodeURIComponent(xmlString));
    downloadLink.setAttribute("download", fileName);
  
    // Trigger the download
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }


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
