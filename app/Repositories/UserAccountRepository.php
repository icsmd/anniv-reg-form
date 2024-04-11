<?php

namespace App\Repositories;

use App\Models\UserAccountModel;
use Illuminate\Support\Facades\Crypt;

/**
 * Class   : UserAccountRepository
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class UserAccountRepository
{
    /** Holds the instance of the instantiated model (General) */
    public $oModel;

    /** Class' constructor */
    public function __construct()
    {
        $this->oModel = new UserAccountModel();
    }

    /** 
     * Retrieves all user accounts 
     * @param array $aWhereParams
     * @return array  
     */
    public function getAllUsers($aWhereParams)
    {
        return $this->oModel::where($aWhereParams)->get()->toArray();
    }

    /** 
     * Creates a user account (Save to DB)
     * @param array $aWhereParams
     * @return mixed  
     */
    public function createUserAccount($aParams)
    {
        $aParams['password'] = Crypt::encryptString($aParams['password']);
        $this->oModel::insert($aParams);
        return $this->oModel::latest()->first();
    }

    /** 
     * Updates a user account record
     * @param int $iId
     * @param array $aParams
     * @return mixed
     */
    public function updateUserAccount($iId, $aParams)
    {
        return $this->oModel::where([ 'user_id' => $iId ])->update($aParams);
    }
}