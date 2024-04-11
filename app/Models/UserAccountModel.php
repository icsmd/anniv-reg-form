<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class   : UserAccountModel
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class UserAccountModel extends Model
{

    /** Constant for the created_at attribute */
    const CREATED_AT = 'date_created';

    /** Constant for the modified_at attribute */
    const UPDATED_AT = 'date_modified';

    /** Attribute set for the db table of the model */
    protected $table = "t_user_account";

    /** Attribute set for the db table's primary key */
    protected $primaryKey = "user_id";

    /** Attribute set to specify the fields allowed to be filled */
    protected $fillable = [
        "username",
        "password",
        "agency"
    ];

    /** Attribute set to specify the encrypted fields */
    protected $encrypted_attributes = [
        "password"
    ];
}