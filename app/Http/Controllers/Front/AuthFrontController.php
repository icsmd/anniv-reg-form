<?php

namespace app\Http\Controllers\Front;


use app\Http\Controllers\Controller;
use app\Services\AuthService;
use app\Libraries\HttpResponseHandlerLibrary as Response;
use app\Libraries\SessionHelperLibrary as Session;

class AuthFrontController extends Controller
{
    private $oAuthService;

    public function __construct()
    {
        $this->oAuthService = new AuthService();
    }

    public function checkSession()
    {
        $aSession = Session::getSession('u_session');
        if ($aSession === null) {
            return view('main');
        } else {
            $sSessionType = $aSession['user_type'];
            return redirect("/front/$sSessionType/home");
        }
    }

    public function getUserSession()
    {
        try {
            $aSession = Session::getSession('u_session');
            return Response::formatSuccessResponse('Successfully retrieved the session', [
                'firstname'   => $aSession['firstname'],
                'lastname'    => $aSession['lastname'],
                'region_id'   => $aSession['region_id'],
                'status'      => $aSession['status'],
                'first_login' => $aSession['first_login'],
                'type'        => $aSession['user_type'],
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