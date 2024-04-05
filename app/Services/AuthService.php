<?php

namespace App\Services;

use App\Libraries\HttpRequestHandlerLibrary as HttpReq;
use App\Libraries\AppConstantsLibrary as Constants;
use App\Libraries\SessionHelperLibrary as Session;
use App\Models\UserAccountModel;
use Illuminate\Support\Facades\Crypt;
use Symfony\Component\HttpFoundation\Response;

class AuthService
{
    protected $oUserAccountModel;

    public function __construct()
    {
        $this->oUserAccountModel = new UserAccountModel();
    }

    public function getAccount($aRequestParams = [])
    {
        return $this->oUserAccountModel::where($aRequestParams)->get()->toArray();
    }
    public function authenticateUser($sUsername, $sPassword)
    {
        $aUserData = data_get($this->getAccount([ 'username' => 'admin01' ]), 0, []);
        $sRetrievedPassword = data_get($aUserData, 'password', null);

        if (empty($sRetrievedPassword) === true) {
            return self::generateAuthResponse(Response::HTTP_UNAUTHORIZED, 'Wrong Credentials. Please Try Again.');
        }
        $sDecryptedPassword = Crypt::decryptString($sRetrievedPassword);
        if ($sPassword === $sDecryptedPassword) {
            $this->setUserSession($aUserData);
            $sUserType = $aUserData['agency'];

            return self::generateAuthResponse(Response::HTTP_OK, 'Successfully authenticated', '/admin/home', $sUserType);
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
            "user_id"  => $aUserData['user_id'],
            "username" => $aUserData['username'],
            "agency"   => $aUserData['agency'],
        ]);
    }

    // private function saveUserLog($iUserId)
    // {
    //     $oUserLogService = new UserLogService();
    //     return $oUserLogService->createLog([
    //         'user_id' => $iUserId
    //     ]);
    // }
}