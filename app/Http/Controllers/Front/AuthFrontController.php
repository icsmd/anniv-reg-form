<?php

namespace App\Http\Controllers\Front;


use App\Http\Controllers\Controller;
use App\Services\AuthService;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use App\Libraries\SessionHelperLibrary as Session;

/**
 * Class   : RegistrationApiController
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class AuthFrontController extends Controller
{
    /** Holds the instance of Auth Service Class */
    private $oAuthService;

    /** Class' constructor */
    public function __construct()
    {
        $this->oAuthService = new AuthService();
    }

    /**
     * Retrieves the user's session data
     * @return mixed|array
     * @throws \Throwable
     */
    public function getUserSession()
    {
        try {
            $aSession = Session::getSession('u_session');
            return Response::formatSuccessResponse('Successfully retrieved the session', [
                'username' => data_get($aSession, 'username', null),
                'agency'   => data_get($aSession, 'agency', null)
            ]);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    /**
     * Logs in the user
     * @return mixed|array
     * @throws \Throwable
     */
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

    /**
     * Logs out the active user
     * @return mixed|array
     * @throws \Throwable
     */
    public function logout()
    {
        session()->flush();
        return redirect('/');
    }

    /**
     * Check App Id Authenticity
     * @return mixed
     */
    public function checkAppId()
    {
        try {
            $aResult = $this->oAuthService->authenticateAppId();
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatSuccessResponse('Fail to check app id; check your app logs', false, HttpResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}