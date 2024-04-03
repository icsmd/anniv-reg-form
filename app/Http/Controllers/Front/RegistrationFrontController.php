<?php

namespace App\Http\Controllers\Front;


use app\Http\Controllers\Controller;
use app\Services\RegistrationService;
use app\Libraries\HttpResponseHandlerLibrary as Response;
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

    public function saveRegistration()
    {
        try {

        } catch (\Throwable $oException) {
            
        }
    }

}

