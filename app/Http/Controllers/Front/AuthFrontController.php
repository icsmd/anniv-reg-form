<?php

namespace App\Http\Controllers\Front;


use App\Http\Controllers\Controller;
use App\Services\AuthService;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Libraries\SessionHelperLibrary as Session;
class AuthFrontController extends Controller
{
    private $oAuthService;

    public function __construct()
    {
        $this->oAuthService = new AuthService();
    }

    public function getUserSession()
    {
        try {
            $aSession = Session::getSession('u_session');
            return Response::formatSuccessResponse('Successfully retrieved the session', [
                'username'   => data_get($aSession, 'username', null),
                'agency'    => data_get($aSession, 'agency', null)
            ]);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function login()
    {
        try {
            $sUsername = base64_decode(request()->input('username'));
            $sPassword = base64_decode(request()->input('password'));
        
            $aResult = $this->oAuthService->authenticateUser($sUsername, $sPassword);
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function logout()
    {
        session()->flush();
        return redirect('/');
    }
}