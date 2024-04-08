<?php

namespace App\Services;

use App\Libraries\HttpRequestHandlerLibrary as HttpReq;
use App\Models\MembershipTypeModel;
use App\Models\RegistrationModel;
use App\Resources\MembershipTypeApiResource;
use App\Resources\RegistrationApiResource;
use Symfony\Component\HttpFoundation\Response;

class RegistrationService
{
    public function getMembershipTypeList()
    {
        $oMstModel = new MembershipTypeModel();
        return MembershipTypeApiResource::collection($oMstModel::all());
    }

    public function getRegistrationList($aRequestParams)
    {
        $oRegistrationModel = new RegistrationModel();
        return [
            'code'    => Response::HTTP_OK,
            'data'    => RegistrationApiResource::collection($oRegistrationModel::where($aRequestParams)->get()),
            'message' => 'Successfully retrieved the registration list'
        ];
    }

    public function getRegistrationDetails($iId)
    {
        $oRegistrationModel = new RegistrationModel();
        return [
            'code'    => Response::HTTP_OK,
            'data'    => $oRegistrationModel::where(['reg_no' => $iId])->get()->toArray(),
            'message' => 'Successfully retrieved the registration details'
        ];
    }

    public function createRegistration($aCreateParams)
    {
        $oRegistrationModel = new RegistrationModel();
        // Trim and uppercase selected fields
        $aCreateParams['email'] = trim($aCreateParams['email']);
        $aCreateParams['first_name'] = trim(strtoupper($aCreateParams['first_name']));
        $aCreateParams['middle_initial'] = trim(strtoupper($aCreateParams['middle_initial']));
        $aCreateParams['last_name'] = trim(strtoupper($aCreateParams['last_name']));
        $aCreateParams['salutation'] = trim(strtoupper($aCreateParams['salutation']));
        $aCreateParams['department'] = trim(strtoupper($aCreateParams['department']));
        $aCreateParams['designation'] = trim(strtoupper($aCreateParams['designation']));
        $aCreateParams['contact_number'] = trim(strtoupper($aCreateParams['contact_number']));
        $aCreateParams['id_code'] = trim(strtoupper($aCreateParams['id_code']));

        $oRegistrationModel->insert($aCreateParams);

        return [
            'code'    => Response::HTTP_CREATED,
            'data'    => $oRegistrationModel::latest()->first(),
            'message' => 'Successfully saved the registration details'
        ];
    }
}