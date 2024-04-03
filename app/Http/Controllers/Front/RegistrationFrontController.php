<?php

namespace App\Http\Controllers\front;


use App\Http\Controllers\Controller;
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
}

