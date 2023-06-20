<?php

namespace App\Http\Resources\OrderItem;

use App\Http\Resources\Order\OrderResource;
use App\Http\Resources\Product\ProductResource;
use App\Models\OrderItem;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemResource extends JsonResource
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
            'order_id' => new OrderResource($this->order),
            'product_id' => new ProductResource($this->product),
            'quantity' => $this->quantity,
            'total_price' => $this->total_price,
            
        ];
    }
}
