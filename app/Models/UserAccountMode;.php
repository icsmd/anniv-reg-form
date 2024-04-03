<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RegistrationModel extends Model {
    const CREATED_AT = 'date_created';
    const UPDATED_AT = 'date_modified';
    protected $table = "r_uacs";

    protected $primaryKey = "uacs_id";

    protected $fillable = [
        "uacs_acc_title",
        "uacs_code",
        "uacs_fund_type",
        "date_modified"
    ];
}