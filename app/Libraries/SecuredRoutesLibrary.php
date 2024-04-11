<?php

namespace App\Libraries;

class SecuredRoutesLibrary
{
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