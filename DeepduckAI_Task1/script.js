function contact() {document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = this.name.value.trim();
    let email = this.email.value.trim();
    let message = this.message.value.trim();

    if(name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
    } else {
        alert("Message Sent Successfully!");
        this.reset();
    }
});

    
}

function animation() {gsap.from(".hero h1",{
y:100,
opacity: 10,
Delay: 0.5,
duration : 2,
stragger: 0.3,
})
    
}