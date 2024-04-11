<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Models\RegistrationModel;
use App\Repositories\RegistrationRepository;

/**
 * Class   : RegistrationApiController
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class RegistrationApiController extends Controller
{
    /** Constant for retrieve message */
    const SUCCESS_RETRIEVE_MSG = "Successfully retrieved registration(s)";

    /** Holds the instance of registration repository class */
    private $oRegistrationRepository;

    /** Holds the instance of the model instantiated (General) */
    private $oModel;

    /** Class' constructor */
    public function __construct()
    {
        $this->oRegistrationRepository = new RegistrationRepository();
        $this->oModel = new RegistrationModel();
    }

    /**
     * Retrieves all registrants
     * @return mixed|array
     * @throws \Throwable
     */
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

    /**
     * Create a registrant record
     * @return mixed|array
     * @throws \Throwable
     */
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

    /**
     * Updates registrant's detail record
     * @return mixed|array
     * @throws \Throwable
     */
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
