jQuery(function($) {
  'use strict';

  /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

  $(function() {
    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut('slow');
  });

  // -----------------------------------------------------------------
  // Login FORM
  // ------------------------------------------------------------------

  (function() {
    $('#loginForm').on('submit', function(e) {
      e.preventDefault();
      var $action = $(this).prop('action');
      var $data = $(this).serialize();
      var $this = $(this);

      $this.prevAll('.alert').remove();

      $.post(
        $action,
        $data,
        function(data) {
          if (data.response == 'error') {
            $this.before('<div class="alert alert-danger">' + data.message + '</div>');
          }
        },
        'json'
      );
    });
  })();
});