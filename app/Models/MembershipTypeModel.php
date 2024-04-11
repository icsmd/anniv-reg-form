<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class   : MembershipTypeModel
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class MembershipTypeModel extends Model {
    
    /** Constant for the created_at attribute */
    const CREATED_AT = 'date_created';
    
    /** Constant for the modified_at attribute */
    const UPDATED_AT = 'date_modified';
    
    /** Attribute set for the db table of the model */
    protected $table = "r_membership_type";
    
    /** Attribute set for the db table's primary key */
    protected $primaryKey = "mst_id";

    /** Attribute set to specify the fields allowed to be filled */
    protected $fillable = [
        "mst_desc",
        "mst_identifier"
    ];
}