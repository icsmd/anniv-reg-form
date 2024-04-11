<?php

namespace App\Http\Validators\Front;

/**
 * Class   : EmailValidator
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class EmailValidator
{
    /**
     * Validates the email field 
     * Rules: Must be required, RFC compliant, established DNS, and unique in t_registration table 
     * @param $request
     */
    public static function validate($request)
    {   
        $request->validate([
            'email' => 'required|email:rfc,dns|unique:t_registration'
        ]);
    }
}