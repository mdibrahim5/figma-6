var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
if (jQuery(".dropdown").length) {
    jQuery(document).on("click", ".dropdown-menu .dropdown-item", function (e) {
        e.preventDefault();
        if (!jQuery(this).hasClass("active")) {
            var swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-danger me-3",
                },
                buttonsStyling: false,
            });
            swalWithBootstrapButtons
                .fire({
                    title: "Are you sure?",
                    text: "Do you really want to change your current language!",
                    icon: "warning",
                    confirmButtonText: " Yes, I am!",
                    cancelButtonText: "<i class='fas fa-times-circle me-1'></i> No, I'm Not",
                    showCancelButton: true,
                    reverseButtons: true,
                    focusConfirm: true,
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        if (!$(this).hasClass("active")) {
                            $(".dropdown-menu .dropdown-item").removeClass("active");
                            $(this).addClass("active");
                            $(this)
                                .parents(".dropdown")
                                .find(".btn")
                                .html("<span class='flag-icon flag-icon-us me-1'></span>" + $(this).text());
                        }
                        Swal.fire({
                            icon: "success",
                            title: "Amazing!",
                            text: "Your current language has been changed successfully.",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
        }
    });
}
jQuery (document).ready(function() {
   jQuery(".owl-carousel-2").owlCarousel({
       'items' : 6,
       'autoPlay' : 2000,
       'goToFirst': true,
       'goToFirstSpeed': 1000,
   });
});
jQuery(document).ready(function() {
 
  jQuery("#owl-demo").owlCarousel({
    navigation : true,
      'items' : 3,
  });
 
});
jQuery (document).ready(function() {
   jQuery(".owl-carousel-4").owlCarousel({
        navigation : true,
        'items' : 5,
   });
});