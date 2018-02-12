$(function () {
  // Get Modal
  // var modal = document.getElementsByClassName('modal-container')[0];

  //Get open modal button
  var openModal = $(".js-modal-open");
  // var openModal = document.getElementsByClassName('js-modal-open')[0];

  //Get close modal button
  var closeModal = $('.js-modal-close');
  // var closeModal = document.getElementsByClassName('js-modal-close')[0];

  var idModal;

  // Open modal
  openModal.click(function () {
    idModal = $(this).attr("data-target");

    $(idModal).fadeIn().css({
      "display": "flex"
    });
  });

  // Close modal
  closeModal.click(function () {
    console.log('Fechar');
    $(idModal).fadeOut().css({
      "display": "none"
    });
    return false;
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if ("#" + event.target.id == idModal) {
      $(idModal).css({ "display": "none" });
    }
  };
});