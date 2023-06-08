<?php

namespace App\Http\Resources\AddressSliderImage;

use Illuminate\Http\Resources\Json\JsonResource;

class AddressSliderImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'order' => $this->order,
            'path' => $this->path,
            'url' => $this->url,
            'address' => $this->address,
            'message' => $this->message,
            'phone_number' => $this->phone_number,
            'opening_hours' => $this->opening_hours,
            'next_address' => $this->next_address,
            'back_address' => $this->back_address,
        ];
    }
}
