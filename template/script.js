let btn = document.querySelector('.cap-img');
btn.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            document.getElementById('msg').style.display = 'none'
            const video = document.getElementById('video');
            video.srcObject = stream;
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = 250;
            canvas.height = 250;

            context.drawImage(video, 0, 0, 250, 250);

            const imageDataURL = canvas.toDataURL('image/png');
            btn.style.visibility = "hidden";
            document.getElementById('processingAlert').style.visibility = "visible"
            const processingAlert = document.getElementById('processingAlert');
            processingAlert.style.display = 'block'; // Change visibility to display

            setTimeout(() => {
                const tracks = video.srcObject.getTracks();
                tracks.forEach(track => track.stop());
                video.style.display = "none";
                processingAlert.style.display = 'none';

                setTimeout(() => {
                    document.getElementById('msg').style.display = 'block'
                    video.style.display = "block";
                    // video.style.width = "250px";
                    // video.style.width = "250px";
                    btn.style.visibility = "visible";
                }, 500); // Adjust the delay as needed
            }, 5000);
        })
        .catch(error => console.error('Error accessing the camera:', error));
});


