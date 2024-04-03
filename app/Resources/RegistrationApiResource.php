<?php

namespace App\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RegistrationApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'reg_no'         => $this->reg_no,
            'email'          => $this->email,
            'first_name'     => $this->first_name,
            'middle_initial' => $this->middle_initial,
            'last_name'      => $this->last_name,
            'salutation'     => $this->salutation,
            'department'     => $this->department,
            'designation'    => $this->designation,
            'membership'     => $this->membershipType->mst_desc,
            'guest_of'       => $this->membershipType->mst_identifier,
            'contact_number' => $this->contact_number,
            'picture'        => $this->picture,
            'id_code'        => $this->id_code,
            'status'         => $this->status,
            'date_created'   => $this->date_created,
            'date_modified'  => $this->date_modified,
        ];
    }
}