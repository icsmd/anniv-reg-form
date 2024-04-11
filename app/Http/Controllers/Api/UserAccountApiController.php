<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Models\UserAccountModel;
use App\Repositories\UserAccountRepository;

/**
 * Class   : UserAccountApiController
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class UserAccountApiController extends Controller
{
    /** Holds the instance of user account repository class */
     public $oUserAccountRepository;

    /** Holds the instance of the model instantiated (General) */
    public $oModel;

     /** Class' constructor */
    public function __construct()
    {
        $this->oModel = new UserAccountModel();
        $this->oUserAccountRepository = new UserAccountRepository();
    }

    /**
     * Create a user account record
     * @return mixed|array
     * @throws \Throwable
     */
    public function createUserAccount()
    {
        try {
            $aRequestParams = request()->only($this->oModel->getFillable());
            $aResult = $this->oUserAccountRepository->createUserAccount($aRequestParams);
            return Response::formatSuccessResponse('Successfully created an account', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }
}