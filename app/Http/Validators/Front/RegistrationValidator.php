<?php

namespace App\Http\Validators\Front;

/**
 * Class   : RegistrationValidator
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class RegistrationValidator
{
    /**
     * Validates the fields for saving registration details
     * Rules: (Varies depending on the field) 
     * @param $request
     */
    public static function validate($request)
    {
        $request->validate([
            'email'          => 'required|email:rfc,dns|unique:t_registration',
            'salutation'     => 'required|string',
            'first_name'     => 'required|string',
            'middle_initial' => 'string|nullable',
            'last_name'      => 'required|string',
            'department'     => 'required|string|max:150',
            'designation'    => 'required|string|max:50',
            'contact_number' => 'required|string|max:11|min:11',
            'picture'        => 'required|string',
            'id_code'        => 'required|string|max:5|min:5|unique:t_registration',
            'mst_id'         => 'required|exists:r_membership_type,mst_id',
        ]);
    }
}