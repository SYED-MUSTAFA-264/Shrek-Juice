    // Check Box Validation //
    document.querySelector('.feedback-form').addEventListener('submit', function(event) {
        var checkboxes = document.querySelectorAll('input[name="juices"]:checked');
        if (checkboxes.length === 0) {
            alert("Please select at least one juice.");
            event.preventDefault();
        }
    });