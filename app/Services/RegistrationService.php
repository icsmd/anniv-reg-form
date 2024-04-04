<?php

namespace App\Services;

use App\Libraries\HttpRequestHandlerLibrary as HttpReq;
use App\Models\MembershipTypeModel;
use App\Models\RegistrationModel;
use App\Resources\MembershipTypeApiResource;
use Symfony\Component\HttpFoundation\Response;

class RegistrationService
{
    public function getMembershipTypeList()
    {
        $oMstModel = new MembershipTypeModel();
        return MembershipTypeApiResource::collection($oMstModel::all());
    }

    public function createRegistration($aCreateParams)
    {
        $oRegistrationModel = new RegistrationModel();
        $oRegistrationModel->insert($aCreateParams);

        return [
            'code'    => Response::HTTP_CREATED,
            'data'    => $oRegistrationModel::latest()->first(),
            'message' => 'Successfully saved the registration details'
        ];
    }
}