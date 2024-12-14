const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;

resumeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Getting input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Clear previous resume output
    resumeOutput.innerHTML = '';

    // Generate the resume below the form
    resumeOutput.innerHTML = `
        <h2>Your Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong><br>${education.replace(/\n/g, '<br>')}</p>
        <p><strong>Experience:</strong><br>${experience.replace(/\n/g, '<br>')}</p>
        <p><strong>Skills:</strong><br>${skills.replace(/\n/g, '<br>')}</p>
    `;

    // Show the resume output section
    resumeOutput.style.display = 'block';
});
