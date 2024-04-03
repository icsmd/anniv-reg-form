<?php

namespace App\Repositories;

use App\Models\RegistrationModel;
use App\Resources\RegistrationApiResource;

class RegistrationRepository
{
    public $oModel; 

    public function __construct()
    {
        $this->oModel = new RegistrationModel();
    }

    public function getAllRegistration($aWhereParams)
    {
        return RegistrationApiResource::collection($this->oModel::where($aWhereParams)->get());
    }

    public function createRegistration($aParams)
    {
        $this->oModel::insert($aParams);
        return $this->oModel::latest()->first();
    }

    public function updateRegistration($iId, $aParams)
    {
        return $this->oModel::where(['reg_no' => $iId])->update($aParams);
    }
}