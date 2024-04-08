<?php

namespace App\Http\Validators\Front;


class RegistrationValidator
{
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