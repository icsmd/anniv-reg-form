<?php

namespace App\Services;
use App\Libraries\HttpRequestHandlerLibrary as HttpReq;
use App\Models\MembershipTypeModel;
use App\Resources\MembershipTypeApiResource;

class RegistrationService
{
    public function getMembershipTypeList()
    {
        $oMstModel = new MembershipTypeModel();
        return MembershipTypeApiResource::collection($oMstModel::all()); 
    }

    public function createRegistration($aCreateParams)
    {
        return HttpReq::requestInternalApi('register/create', 'post', $aCreateParams);
    }
}