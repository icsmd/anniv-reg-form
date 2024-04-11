<?php

namespace App\Services;

use App\Libraries\AppConstantsLibrary as Constants;
use App\Libraries\SessionHelperLibrary as Session;
use App\Models\UserAccountModel;
use Illuminate\Support\Facades\Crypt;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class   : AuthService
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class AuthService
{
    /** Holds the instance of user account model */
    protected $oUserAccountModel;

    /** Class's constructor */
    public function __construct()
    {
        $this->oUserAccountModel = new UserAccountModel();
    }

    /** 
     * Retrieves user account details
     * @param array $aRequestParams
     * @return mixed
     */
    public function getAccount($aRequestParams = [])
    {
        return $this->oUserAccountModel::where($aRequestParams)->get()->toArray();
    }

    /** 
     * Authenticate user details
     * @param string $sUsername
     * @param string $sPassword
     * @return mixed
     */
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

    /**
     * Generates response to authenticating user
     * @param int    $iCode
     * @param string $sMessage
     * @param string $sRedirectUrl
     * @param string $sUserType
     * @return array
     */
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

    /**
     * Sets the user's session details
     * @param array $aUserData
     * @return null
     */
    private function setUserSession($aUserData)
    {
        Session::setSession('u_session', [
            "user_id"  => $aUserData['user_id'],
            "username" => $aUserData['username'],
            "agency"   => $aUserData['agency'],
        ]);
    }
}