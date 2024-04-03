<?php

namespace App\Services;

use App\Libraries\HttpRequestHandlerLibrary as HttpReq;
use App\Libraries\AppConstantsLibrary as Constants;
use App\Libraries\SessionHelperLibrary as Session;
use Illuminate\Support\Facades\Crypt;
use Symfony\Component\HttpFoundation\Response;

class AuthService
{
    public function authenticateUser($sUsername, $sPassword)
    {
        $sRetrievedPassword = data_get(HttpReq::requestInternalApi("users/get/password/$sUsername", 'get'), 'data.password', null);
        if (empty($sRetrievedPassword) === true) {
            return self::generateAuthResponse(Response::HTTP_UNAUTHORIZED, 'Wrong Credentials. Please Try Again.');
        }
        $sDecryptedPassword = Crypt::decryptString($sRetrievedPassword);
        if ($sPassword === $sDecryptedPassword) {
            $aUserData = data_get(HttpReq::requestInternalApi("users/get/$sUsername", 'get'), 'data.0');
            if ($aUserData['status'] !== 'active') {
                return self::generateAuthResponse(Response::HTTP_OK, 'The account has been deactivated. Contact your administrator for concerns.');
            } else {
                $this->setUserSession($aUserData);
                $sUserId = $aUserData['user_id'];
                $sUserType = $aUserData['user_type'];
                $sHomeUrl = sprintf('/front/%s/home', $sUserType);
                $this->saveUserLog($sUserId);

                return self::generateAuthResponse(Response::HTTP_OK, 'Successfully authenticated', $sHomeUrl, $sUserType);
            }
        } else {
            return self::generateAuthResponse(Response::HTTP_UNAUTHORIZED, 'Wrong Credentials. Please Try Again.');
        }
    }

    private static function generateAuthResponse($iCode, $sMessage, $sRedirectUrl = '', $sUserType = '')
    {
        return [
            Constants::CODE    => $iCode,
            Constants::DATA    => [
                'href' => $sRedirectUrl,
                'amho' => $sUserType
            ],
            Constants::MESSAGE => $sMessage,
        ];
    }

    private function setUserSession($aUserData)
    {
        Session::setSession('u_session', [
            "user_id"     => $aUserData['user_id'],
            "firstname"   => $aUserData['firstname'],
            "lastname"    => $aUserData['lastname'],
            "username"    => $aUserData['username'],
            "user_type"   => $aUserData['user_type'],
            "region_id"   => $aUserData['region_id'],
            "region_abbr" => $aUserData['region_abbr'],
            "status"      => $aUserData['status'],
            "first_login" => $aUserData['first_login'],
        ]);
    }

    private function saveUserLog($iUserId)
    {
        $oUserLogService = new UserLogService();
        return $oUserLogService->createLog([
            'user_id' => $iUserId
        ]);
    }
}