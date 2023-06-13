<?php

namespace App\Http\Resources\Cart;

use App\Http\Resources\ProductImages\ProductImagesResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CartItemResource extends JsonResource
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
            'title' => $this->title,
            'slug' => $this->slug,
            'price' => $this->price,
            'is_active' => $this->is_active,
            'preview_description' => $this->preview_description,
            'detail_description' => $this->detail_description,
            'hit' => $this->hit,
            'category' => [
                'id' => $this->category_id,
                'name' => $this->category->title
            ],
            'images' => ProductImagesResource::collection($this->productImage),
            'quantity' => $this->quantity,
            'totalPrice' => $this->totalPrice,
        ];
    }
}
