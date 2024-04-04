<?php

namespace App\Http\Validators\Front;


class EmailValidator
{
    public static function validate($request)
    {   
        $request->validate([
            'email' => 'required|email:rfc,dns|unique:t_registration'
        ]);
    }
}