<?php

namespace App\Repositories;

use App\Models\UserAccountModel;
use Illuminate\Support\Facades\Crypt;

class UserAccountRepository
{
    public $oModel;

    public function __construct()
    {
        $this->oModel = new UserAccountModel();
    }

    public function getAllUsers($aWhereParams)
    {
        return $this->oModel::where($aWhereParams)->get()->toArray();
    }

    public function createUserAccount($aParams)
    {
        $aParams['password'] = Crypt::encryptString($aParams['password']);
        $this->oModel::insert($aParams);
        return $this->oModel::latest()->first();
    }

    public function updateUserAccount($iId, $aParams)
    {
        return $this->oModel::where(['user_id' => $iId ])->update($aParams);
    }
}