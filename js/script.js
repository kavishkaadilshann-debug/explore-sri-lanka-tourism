/*01*/
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletter-email');
    const messageDisplay = document.getElementById('subscribe-msg');
    const emailValue = emailInput.value.trim();
    

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailValue === "") {
        showMessage(messageDisplay, "Please enter your email address.", "#dc2626");
        return;
    }
    
    if (!emailPattern.test(emailValue)) {
        showMessage(messageDisplay, "Please enter a valid email address.", "#dc2626");
        return;
    }
    
    
    showMessage(messageDisplay, "Subscription successful! Thank you.", "#004e92");
    emailInput.value = ""; // Input එක clear කිරීම
}

/*02*/
function submitForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    
    let messageDisplay = document.getElementById('contact-msg');
    if (!messageDisplay) {
        messageDisplay = document.createElement('p');
        messageDisplay.id = 'contact-msg';
        messageDisplay.style.marginTop = '15px';
        messageDisplay.style.fontWeight = '600';
        messageDisplay.style.textAlign = 'center';
        form.appendChild(messageDisplay);
    }
    
    
    if (name === "" || email === "" || message === "") {
        showMessage(messageDisplay, "All fields are required.", "#dc2626");
        return;
    }
    
    
    showMessage(messageDisplay, "Message sent successfully!", "#004e92");
    form.reset(); // Form එකේ ටයිප් කරපු දේවල් clear කිරීම
}

/*
 animation & display
 */
function showMessage(element, text, color) {
    element.innerText = text;
    element.style.color = color;
    element.style.display = "block";
    
    
    setTimeout(() => {
        element.style.display = "none";
    }, 4000);
}
