<?php

namespace App\Http\Resources\ImageTypes;

use App\Http\Resources\Images\ImagesResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ImageTypesResource extends JsonResource
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
            'name' => $this->name,
            'images' => ImagesResource::collection($this->images),
        ];
    }
}
