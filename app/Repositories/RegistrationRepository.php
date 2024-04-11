<?php

namespace App\Repositories;

use App\Models\RegistrationModel;
use App\Resources\RegistrationApiResource;

/**
 * Class   : RegistrationRepository
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class RegistrationRepository
{
    /** Holds the instance of the instantiated model (General) */
    public $oModel;

    /** Class' constructor */
    public function __construct()
    {
        $this->oModel = new RegistrationModel();
    }

    /** 
     * Retrieves all registration records
     * @param array $aWhereParams
     * @return mixed
     */
    public function getAllRegistration($aWhereParams)
    {
        return RegistrationApiResource::collection($this->oModel::where($aWhereParams)->get());
    }

    /** 
     * Creates a registration record (Save to DB)
     * @param array $aWhereParams
     * @return mixed  
     */
    public function createRegistration($aParams)
    {
        $this->oModel::insert($aParams);
        return $this->oModel::latest()->first();
    }

    /** 
     * Updates a registration record
     * @param int $iId
     * @param array $aParams
     * @return mixed
     */
    public function updateRegistration($iId, $aParams)
    {
        return $this->oModel::where([ 'reg_no' => $iId ])->update($aParams);
    }
}