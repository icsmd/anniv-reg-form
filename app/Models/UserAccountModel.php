<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserAccountModel extends Model {
    const CREATED_AT = 'date_created';
    const UPDATED_AT = 'date_modified';
    protected $table = "t_user_account";

    protected $primaryKey = "user_id";

    protected $fillable = [
        "username",
        "password",
        "agency"
    ];

    protected $encrypted_attributes = [
        "password"
    ];
}