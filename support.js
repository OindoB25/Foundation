function copyVal(id) {
    const text = document.getElementById(id).innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        // Find the button inside the same parent as the ID
        const btn = document.querySelector(`button[onclick="copyVal('${id}')"]`);
        const originalText = btn.innerText;
        
        // Visual feedback
        btn.innerText = "COPIED";
        btn.style.background = "#D4AF37";
        btn.style.color = "black";
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "#121212";
            btn.style.color = "#D4AF37";
        }, 2000);
    });
}
