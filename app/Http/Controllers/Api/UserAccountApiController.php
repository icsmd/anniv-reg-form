<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Models\UserAccountModel;
use App\Repositories\UserAccountRepository;

class UserAccountApiController extends Controller
{
    public $oModel;

    public $oUserAccountRepository;

    public function __construct()
    {
        $this->oModel = new UserAccountModel();
        $this->oUserAccountRepository = new UserAccountRepository();
    }
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