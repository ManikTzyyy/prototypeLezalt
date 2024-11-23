function changeContent(step, selectedImage) {
    var lesSaltDiv = document.getElementById('les-salt');
    var heading4 = lesSaltDiv.querySelector('h4');
    var paragraph = lesSaltDiv.querySelector('p');
    
    // Define the content for each step
    var content = [
      {
        imageUrl: '../assets/img/2.jpg',
        title: 'Traditional Les Salt',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque sequi consequuntur earum, alias explicabo...',
      },
      {
        imageUrl: '../assets/img/3.jpg',
        title: 'Salt Harvesting Process',
        text: 'This is the first step in the salt harvesting process. Salt is gathered from the sea.',
      },
      {
        imageUrl: '../assets/img/4.jpg',
        title: 'Drying the Salt',
        text: 'In the second step, the gathered salt is spread out to dry under the sun.',
      },
      {
        imageUrl: '../assets/img/5.jpg',
        title: 'Packing the Salt',
        text: 'The dried salt is then packed and ready for distribution.',
      },
    
    ];
  
    // Set the background image, heading, and paragraph based on the selected step
    lesSaltDiv.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%), url('${content[step-1].imageUrl}')`;
    heading4.textContent = content[step-1].title;
    paragraph.textContent = content[step-1].text;
  
    // Remove 'step-active' class from all images
    var allImages = document.querySelectorAll('.step');
    allImages.forEach(function(image) {
      image.classList.remove('step-active');
    });
  
    // Add 'step-active' class to the selected image
    selectedImage.classList.add('step-active');
  }
  