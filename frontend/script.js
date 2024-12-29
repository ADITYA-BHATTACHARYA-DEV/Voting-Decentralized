document.addEventListener("DOMContentLoaded", () => {
    const timeElement = document.getElementById('time');
    const timerMessage = document.getElementById('timerMessage');
    const sendVoteButton = document.getElementById('sendVote');
    const voteInput = document.getElementById('voteInput');
    const showResultButton = document.getElementById('showResult');
    const resultSection = document.getElementById('result');
    let timeLeft = 123;
    let voted = false;

   

    // Set up Framer Motion
    const motionDiv = document.querySelectorAll('.motion-div');
    motionDiv.forEach((el) => {
        el.style.transition = "opacity 1s";
    });

    // Timer countdown function
    const countdown = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerMessage.textContent = "Voting Time Over";
        }
    }, 1000);

    // Show the result section when clicked
    showResultButton.addEventListener('click', () => {
        resultSection.style.opacity = 1;
    });

    // Handle vote submission
    sendVoteButton.addEventListener('click', () => {
        if (voteInput.value) {
            voted = true;
            alert(`You voted for Candidate ID: ${voteInput.value}`);
            sendVoteButton.textContent = "Vote Sent";
            sendVoteButton.disabled = true;
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
    const sliderImages = document.querySelectorAll(".slider-image");
    let currentSlide = 0;

    // Toggle dark mode
    toggleDarkModeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Slider function
    function changeSlide() {
        sliderImages.forEach((img, index) => {
            img.classList.remove("show");
            if (index === currentSlide) img.classList.add("show");
        });
        currentSlide = (currentSlide + 1) % sliderImages.length;
    }
    setInterval(changeSlide, 4000); // Change every 4 seconds
});


$(document).ready(function () {
    // Example pet data
    const pets = [
      { id: 1, name: "Scrappy", breed: "Golden Retriever", age: 3, location: "Warren, MI", image: "https://animalso.com/wp-content/uploads/2017/01/Golden-Retriever_6.jpg" },
      { id: 2, name: "Bella", breed: "Labrador", age: 5, location: "Detroit, MI", image: "https://animalso.com/wp-content/uploads/2017/01/Labrador_3.jpg" },
      // Add more pets as needed
    ];
  
    // Load pets dynamically
    pets.forEach(pet => {
      const petTemplate = $('#petTemplate').html();
      const $newPet = $(petTemplate);
  
      $newPet.find('.card-title').text(pet.name);
      $newPet.find('.pet-breed').text(pet.breed);
      $newPet.find('.pet-age').text(pet.age);
      $newPet.find('.pet-location').text(pet.location);
      $newPet.find('img').attr('src', pet.image);
      $newPet.find('.btn-adopt').attr('data-id', pet.id);
  
      $('#petsRow').append($newPet);
    });
  });
  


  $(document).ready(function () {
    // Example pet data
    const pets = [
      { id: 1, name: "Scrappy", breed: "Golden Retriever", age: 3, location: "Warren, MI", image: "https://animalso.com/wp-content/uploads/2017/01/Golden-Retriever_6.jpg" },
      { id: 2, name: "Bella", breed: "Labrador", age: 5, location: "Detroit, MI", image: "https://animalso.com/wp-content/uploads/2017/01/Labrador_3.jpg" },
      // Additional pets can be added here
    ];
  
    // Dynamically load pets into the page
    pets.forEach(pet => {
      const petTemplate = $('#petTemplate').html();
      const $newPet = $(petTemplate);
  
      $newPet.find('.card-title').text(pet.name);
      $newPet.find('.pet-breed').text(pet.breed);
      $newPet.find('.pet-age').text(pet.age);
      $newPet.find('.pet-location').text(pet.location);
      $newPet.find('img').attr('src', pet.image);
      $newPet.find('.btn-adopt').attr('data-id', pet.id);
  
      $('#petsRow').append($newPet);
    });
  });
  

  // Enable carousel auto-slide
$('#backgroundCarousel').carousel({
    interval: 5000, // Slide every 5 seconds
    ride: 'carousel'
  });
  