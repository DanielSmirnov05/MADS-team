var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var images = document.querySelectorAll(".image_gallery");
var currentIndex = 0;

function openModal(index) {
  modal.style.display = "block";
  modalImg.src = images[index].querySelector("img").src;
  captionText.innerHTML = "Image " + (index + 1) + " of " + images.length;
  currentIndex = index;
}

function closeModalFunction() {
  modal.style.display = "none";
}

function showNext() {
  if (currentIndex < images.length - 1) {
    openModal(currentIndex + 1);
  }
}

function showPrevious() {
  if (currentIndex > 0) {
    openModal(currentIndex - 1);
  }
}

images.forEach(function(image, index) {
  image.addEventListener("click", function() {
    openModal(index);
  });
});

var closeModal = document.getElementById("closeModal");
closeModal.onclick = function() {
  closeModalFunction();
};

var nextButton = document.getElementById("nextButton");
nextButton.onclick = function() {
  showNext();
};

var previousButton = document.getElementById("previousButton");
previousButton.onclick = function() {
  showPrevious();
};

document.onkeydown = function(event) {
  event = event || window.event;
  if (event.keyCode == 27) {
    closeModalFunction();
  } else if (event.keyCode == 37) {
    showPrevious();
  } else if (event.keyCode == 39) {
    showNext();
  }
};