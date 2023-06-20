<?php

namespace App\Http\Resources\Order;

use App\Http\Resources\AddressSliderImage\AddressSliderImageResource;
use App\Http\Resources\Buyer\BuyerResource;
use App\Http\Resources\OrderItem\OrderItemResource;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'buyer' => new BuyerResource($this->buyer),
            'total_price' => $this->total_price,
            'payed' => $this->payed,
            'picked_up' => $this->picked_up,
            'address' => new AddressSliderImageResource($this->address),
        ];
    }
}
