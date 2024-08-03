document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm');
    const preview = document.getElementById('resumePreview');
    const exportButton = document.getElementById('exportButton');

    form.addEventListener('input', updatePreview);

    function updatePreview() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const objective = document.getElementById('objective').value;
        const experience = document.getElementById('experience').value;
        const education = document.getElementById('education').value;
        const skills = document.getElementById('skills').value;

        preview.innerHTML = `
            <h2 class="text-center">${name}</h2>
            <div class="d-flex justify-content-center">
                <p class="mr-4"><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
            </div>
            <h3>Objective</h3>
            <p>${objective}</p>
            <h3>Education</h3>
            <ul>${formatListItems(education)}</ul>
            <h3>Skills</h3>
            <ul>${formatListItems(skills)}</ul>
            <h3>Experience</h3>
            <ul>${formatListItems(experience)}</ul>
        `;
    }

    function formatListItems(text) {
        return text.split('\n').map(item => `<li>${item.trim()}</li>`).join('');
    }

    exportButton.addEventListener('click', () => {
        const element = document.getElementById('resumePreview');
        const opt = {
            margin:       1,
            filename:     'resume.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    });
});
