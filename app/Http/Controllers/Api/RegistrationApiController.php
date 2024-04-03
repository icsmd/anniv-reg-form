<?php

namespace App\Http\Controllers\Api;

use app\Http\Controllers\Controller;
use app\Libraries\HttpResponseHandlerLibrary as Response;
use app\Models\RegistrationModel;
use app\Repositories\RegistrationRepository;

class RegistrationApiController extends Controller
{
    const SUCCESS_RETRIEVE_MSG = "Successfully retrieved registration(s)";
    private $oRegistrationRepository;

    private $oModel;

    public function __construct()
    {
        $this->oRegistrationRepository = new RegistrationRepository();
        $this->oModel = new RegistrationModel();
    }

    public function getAllRegistration()
    {
        try {
            $aWhereParams = request()->only($this->oModel->searchable);
            $aResult = $this->oRegistrationRepository->getAllRegistration($aWhereParams);
            return Response::formatSuccessResponse(self::SUCCESS_RETRIEVE_MSG, $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function createRegistration()
    {
        try {
            $aRequestParams = request()->only($this->oModel->getFillable());
            $aResult = $this->oRegistrationRepository->createRegistration($aRequestParams);
            return Response::formatSuccessResponse('Successfully created a registration', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function updateRegistration($iId)
    {
        try {
            $aRequestParams = request()->only('status');
            $aResult = $this->oRegistrationRepository->updateRegistration($iId, $aRequestParams);
            return Response::formatSuccessResponse('Successfully updated registration', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    } 
}
