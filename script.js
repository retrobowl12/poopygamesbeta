// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Define HTML content to inject using template literals
    var htmlContent = `
        <div class="custom-content">
        <div class="context">
    </div>


<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        </div>`;
    
    // Inject HTML into a specific element or the body
    document.body.innerHTML += htmlContent;
});

