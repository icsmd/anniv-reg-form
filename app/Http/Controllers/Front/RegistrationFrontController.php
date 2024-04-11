<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Validators\Front\EmailValidator;
use App\Http\Validators\Front\RegistrationValidator;
use App\Models\RegistrationModel;
use App\Services\RegistrationService;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use Symfony\Component\HttpFoundation\Response as HttpCode;

/**
 * Class   : RegistrationFrontController
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class RegistrationFrontController extends Controller
{
    /** Holds the instance of registration service class */
    private $oRegistrationService;

    /** Class' constructor */
    public function __construct()
    {
        $this->oRegistrationService = new RegistrationService();
    }

    /**
     * Retrieves the membership type list (Library)
     * @return mixed|array
     * @throws \Throwable
     */
    public function getMembershipTypes()
    {
        try {
            $aResult = $this->oRegistrationService->getMembershipTypeList();
            return Response::formatSuccessResponse('Successfully retrieved MST list', $aResult, HttpCode::HTTP_OK);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    /**
     * Validates the email address submitted
     * @return mixed|array
     * @throws \Throwable
     */
    public function validateEmail()
    {
        try {
            EmailValidator::validate(request());
            return Response::formatSuccessResponse('Email is valid', true, HttpCode::HTTP_OK);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    /**
     * Saves the registration details submitted
     * @return mixed|array
     * @throws \Throwable
     */
    public function saveRegistration()
    {
        try {
            RegistrationValidator::validate(request());
            $oModel = new RegistrationModel();
            $aResult = $this->oRegistrationService->createRegistration(request()->only($oModel->getFillable()));
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    /**
     * Retrieves the registrant list
     * - Filtered by start and end date
     * @return mixed|array
     * @throws \Throwable
     */
    public function getRegistrationList()
    {
        try {
            $sStartDate = request()->input('start_date');
            $sEndDate = request()->input('end_date');
            $aResult = $this->oRegistrationService->getRegistrationList($sStartDate, $sEndDate);
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    /**
     * Retrieves a particular registrant's details
     * @param int $iId 
     * @return mixed|array
     * @throws \Throwable
     */
    public function getRegistrationDetails($iId)
    {
        try {
            $aResult = $this->oRegistrationService->getRegistrationDetails($iId);
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }
}

