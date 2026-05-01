// This is a list of words we consider "Educational". 
// You can add more words to this list inside the quotes!
const educationalWords = [
    "science", "history", "math", "tutorial", "documentary", 
    "learn", "course", "education", "physics", "space", 
    "programming", "code", "study"
];

function filterVideos() {
    // Find all the video boxes on the YouTube homepage
    const videos = document.querySelectorAll('ytd-rich-item-renderer, ytd-video-renderer');

    videos.forEach(video => {
        // Get the title of the video
        const titleElement = video.querySelector('#video-title');
        
        if (titleElement) {
            // Make the title lowercase to make searching easier
            const titleText = titleElement.innerText.toLowerCase();
            
            // Check if the title has any of our educational words
            let isEducational = false;
            for (let word of educationalWords) {
                if (titleText.includes(word)) {
                    isEducational = true;
                    break;
                }
            }

            // If it is NOT educational, hide it!
            if (!isEducational) {
                video.style.display = 'none';
            }
        }
    });
}

// YouTube loads videos as you scroll, so we need to run our filter every 2 seconds.
setInterval(filterVideos, 2000);