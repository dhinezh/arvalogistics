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
      if ($('#username').val() === '' || $('#password').val() === '') {
        $(this).before('<div class="alert alert-danger">Please enter username/password</div>');
        $('.alert-danger').delay(1000).fadeOut('slow');
      }
      // var $action = $(this).prop('action');
      // var $data = $(this).serialize();
      // var $this = $(this);

      // $this.prevAll('.alert').remove();

      // $.post(
      //   $action,
      //   $data,
      //   function(data) {
      //     if (data.response == 'error') {
      //       $this.before('<div class="alert alert-danger">' + data.message + '</div>');
      //     }

      //     if (data.response == 'success') {
      //       $this.before('<div class="alert alert-success">' + data.message + '</div>');
      //       $this.find('input, textarea').val('');
      //     }
      //   },
      //   'json'
      // );
    });
  })();
});