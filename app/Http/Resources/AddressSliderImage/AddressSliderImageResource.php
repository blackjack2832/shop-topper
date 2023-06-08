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
            'path' => $this->path,
            'url' => $this->url,
            'address' => $this->address,
            'message' => $this->message,
            'phone' => $this->phone,
        ];
    }
}
