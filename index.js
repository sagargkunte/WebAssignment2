        $(document).ready(function() {
            // Intercept Form Submission
            $('#registrationForm').on('submit', function(e) {
                e.preventDefault(); // Prevent actual page reload (Simulating PHP handling)

                // 1. Capture Data using jQuery
                const formData = {
                    name: $('#fullname').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val(),
                    gender: $('input[name="gender"]:checked').val(),
                    course: $('#course').val(),
                    address: $('#address').val()
                };

                // 2. Populate Display Section
                $('#display-name').text(formData.name);
                $('#display-email').text(formData.email);
                $('#display-phone').text(formData.phone);
                $('#display-gender').text(formData.gender);
                $('#display-course').text(formData.course);
                $('#display-address').text(formData.address);

                // 3. UI Transition: Hide Form, Show Success
                $('#application-form-container').fadeOut(300, function() {
                    $('#success-display')
                        .removeClass('hidden')
                        .animate({ opacity: 1 }, 200)
                        .removeClass('scale-95')
                        .addClass('scale-100');
                });
            });

            // Reset Logic
            $('#reset-btn').on('click', function() {
                $('#success-display').addClass('scale-95').fadeOut(300, function() {
                    $(this).addClass('hidden');
                    $('#registrationForm')[0].reset();
                    $('#application-form-container').fadeIn(300);
                });
            });
        });
  