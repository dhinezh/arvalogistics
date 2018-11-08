<?php
    session_cache_limiter( 'nocache' );
    header( 'Expires: ' . gmdate( 'r', 0 ) );
    header( 'Content-type: application/json' );

    $username   = strip_tags($_POST['username']);
    $password   = strip_tags($_POST['password']);
    $result     = array();


    if(empty($username)){

        $result = array( 'response' => 'error', 'empty'=>'username', 'message'=>'<strong>Error!</strong> Username is empty.' );
        echo json_encode($result );
        die;
    }

    if(empty($password)){

        $result = array( 'response' => 'error', 'empty'=>'password', 'message'=>'<strong>Error!</strong> password is empty.' );
        echo json_encode($result );
        die;
    }

    if ( validate ) {
        
    } else {
        $result = array( 'response' => 'error', 'message'=>'Wrong Username/password');
    }

    echo json_encode( $result );

    die;
?>