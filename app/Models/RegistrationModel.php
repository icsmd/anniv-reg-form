<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RegistrationModel extends Model {
    const CREATED_AT = 'date_created';
    const UPDATED_AT = 'date_modified';
    protected $table = "t_registration";

    protected $primaryKey = "reg_no";

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

    public function membershipType()
    {
        return $this->belongsTo(MembershipTypeModel::class,  'mst_id', 'mst_id');
    }
}