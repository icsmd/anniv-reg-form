<?php

namespace App\Libraries;

/**
 * Class   : SecuredRoutesLibrary
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class SecuredRoutesLibrary
{
    /** Constant for secured routes array collection */
    const SECURED_ROUTES = [
        'N' => [
            '/admin/home',
            '/admin/home/print',
            '/admin/registrant/details',
            '/user/session',
            '/get-reg-list',
            '/get-reg-details/',
            '/auth/log-out'
        ],
    ];
}