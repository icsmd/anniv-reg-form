<?php

namespace App\Http\Controllers\Front;


use App\Http\Controllers\Controller;
use App\Http\Validators\Front\EmailValidator;
use App\Services\RegistrationService;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use Symfony\Component\HttpFoundation\Response as HttpCode;

class RegistrationFrontController extends Controller
{
    private $oRegistrationService;

    public function __construct()
    {
        $this->oRegistrationService = new RegistrationService();
    }

    public function getMembershipTypes()
    {
        try {
            $aResult = $this->oRegistrationService->getMembershipTypeList();
            return Response::formatSuccessResponse('Successfully retrieved MST list', $aResult, HttpCode::HTTP_OK);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function validateEmail()
    {
        try {
            EmailValidator::validate(request());
            return Response::formatSuccessResponse('Email is valid', true, HttpCode::HTTP_OK);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function saveRegistration()
    {
        try {
            $aResult = $this->oRegistrationService->createRegistration(request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function getRegistrationList()
    {
        try {
            $aResult = $this->oRegistrationService->getRegistrationList(request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

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

