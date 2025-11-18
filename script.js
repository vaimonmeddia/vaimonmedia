// Asegura que los videos empiecen automáticamente incluso en móviles
document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".background-video");
    videos.forEach(video => {
        video.muted = true;
        video.play().catch(() => {
            // algunos navegadores bloquean autoplay, esto lo intenta de nuevo
            video.muted = true;
            video.play();
        });
    });
});
