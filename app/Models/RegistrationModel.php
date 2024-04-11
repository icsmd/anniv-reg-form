<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class   : RegistrationModel
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class RegistrationModel extends Model
{

    /** Constant for the created_at attribute */
    const CREATED_AT = 'date_created';
    
    /** Constant for the modified_at attribute */
    const UPDATED_AT = 'date_modified';
    
    /** Attribute set for the db table of the model */
    protected $table = "t_registration";
    
    /** Attribute set for the db table's primary key */
    protected $primaryKey = "reg_no";

    /** Attribute set to specify the fields allowed to be filled */
    protected $fillable = [
        "email",
        "first_name",
        "middle_initial",
        "last_name",
        "salutation",
        "department",
        "designation",
        "contact_number",
        "picture",
        "id_code",
        "status",
        "mst_id",
    ];

    /** Attribute set to specify the fields allowed to be searched */
    public $searchable = [
        "email",
        "first_name",
        "middle_initial",
        "last_name",
        "salutation",
        "department",
        "designation",
        "contact_number",
        "id_code",
        "status",
        "mst_id",
    ];

    /**
     * Enforce foregin key relationship with membership type mode
     * Join Type: Left Join
     */
    public function membershipType()
    {
        return $this->belongsTo(MembershipTypeModel::class, 'mst_id', 'mst_id');
    }
}