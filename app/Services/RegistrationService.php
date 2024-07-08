<?php

namespace App\Services;

use App\Libraries\AppConstantsLibrary as AppConst;
use App\Models\MembershipTypeModel;
use App\Models\RegistrationModel;
use App\Resources\MembershipTypeApiResource;
use App\Resources\RegistrationApiResource;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class   : RegistrationService
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class RegistrationService
{
    /**
     * Retrieves the membership type list (Library)
     * @return mixed
     */
    public function getMembershipTypeList()
    {
        $oMstModel = new MembershipTypeModel();
        return MembershipTypeApiResource::collection($oMstModel::all());
    }

    /**
     * Retrieves the registration list 
     * @param string $sStartDate
     * @param string $sEndDate
     * @return mixed|array
     */
    public function getRegistrationList($sStartDate, $sEndDate)
    {
        $oRegistrationModel = new RegistrationModel();
        $aResult = RegistrationApiResource::collection($oRegistrationModel::select(
            'reg_no',
            'first_name',
            'middle_initial',
            'last_name',
            'email',
            'salutation',
            'department',
            'designation',
            'contact_number',
            'id_code',
            'status',
            'mst_id',
            'date_created'
           )->whereDate('date_created', '>=', $sStartDate)
            ->whereDate('date_created', '<=', $sEndDate)
            ->get());
        return [
            AppConst::CODE    => Response::HTTP_OK,
            AppConst::DATA    => $aResult,
            AppConst::MESSAGE => 'Successfully retrieved the registration list'
        ];
    }

    /**
     * Retrieves specific registration details by id
     * @param int $iId
     * @return array
     */
    public function getRegistrationDetails($iId)
    {
        $oRegistrationModel = new RegistrationModel();
        return [
            AppConst::CODE    => Response::HTTP_OK,
            AppConst::DATA    => $oRegistrationModel::where([ 'reg_no' => $iId ])->get()->toArray(),
            AppConst::MESSAGE => 'Successfully retrieved the registration details'
        ];
    }

    /** 
     * Creates a registration record (Save to DB)
     * @param array $aCreateParams
     * @return mixed|array
     */
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
            AppConst::CODE    => Response::HTTP_CREATED,
            AppConst::DATA    => $oRegistrationModel::latest()->first(),
            AppConst::MESSAGE => 'Successfully saved the registration details'
        ];
    }
}