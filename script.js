document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("response").innerText = "Thank you! We'll get back to you soon.";
    this.reset();
});
