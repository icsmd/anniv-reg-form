<?php

namespace App\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class   : MembershipTypeApiResource
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class MembershipTypeApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'mst_id'   => $this->mst_id,
            'mst_desc' => $this->mst_desc,
        ];
    }
}