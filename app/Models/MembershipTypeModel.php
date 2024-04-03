<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MembershipTypeModel extends Model {
    const CREATED_AT = 'date_created';
    const UPDATED_AT = 'date_modified';
    protected $table = "r_membership_type";
    protected $primaryKey = "mst_id";
    protected $fillable = [
        "mst_desc",
        "mst_identifier"
    ];
}