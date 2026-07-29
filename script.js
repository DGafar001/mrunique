document.addEventListener('DOMContentLoaded', () => {
    // Progressive Image Lazy Loading Logic
    const realImage = document.querySelector('.real-image');
    const placeholder = document.querySelector('.placeholder-blur');

    if (realImage && placeholder) {
        // 1. Get the actual high-res URL saved inside data-src attributes
        const highResUrl = realImage.getAttribute('data-src');
        
        // 2. Instruct the browser to download the file in the background
        realImage.src = highResUrl;
        
        // 3. Trigger the crossfade effect as soon as download ends
        realImage.addEventListener('load', () => {
            realImage.classList.add('loaded');
            
            // Optional: Hide the tiny placeholder completely after fade completes
            setTimeout(() => {
                placeholder.style.display = 'none';
            }, 600);
        });
    }

    // --- Your existing newsletter form code remains here safely below ---
    const form = document.getElementById('notifyForm');
    const emailInput = document.getElementById('emailInput');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailValue = emailInput.value.trim();
            if (emailValue) {
                console.log(`Email collected: ${emailValue}`);
                alert('Thank you for your interest! We will keep you updated.');
                form.reset();
            }
        });
    }
});

document.getElementById("statusbadge").onclick = () => {
 document.getElementsByClassName("mymodal")[0].style.display='block';
}
document.getElementById("modalbtn").addEventListener("click", function(){
 document.getElementsByClassName("mymodal")[0].style.display='none';
    
})