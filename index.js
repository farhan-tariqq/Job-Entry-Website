<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Get the hamburger menu element
        var hamburgerMenu = document.querySelector(".navbar-toggler");

        // Get the collapse menu element
        var collapseMenu = document.querySelector(".navbar-collapse");

        // Close the collapse menu when the next page loads
        collapseMenu.classList.remove("show");
        hamburgerMenu.setAttribute("aria-expanded", "false");
    });
</script>
