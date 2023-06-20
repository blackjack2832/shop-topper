<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $guarded = false;

    public function buyer() {
        return $this->belongsTo(Buyer::class, 'buyer_id', 'id');
    }

    public function address() {
        return $this->belongsTo(AddressSliderImage::class, 'address_id', 'id');
    }

    public function items() {
        return $this->hasMany(OrderItem::class, 'order_id', 'id');
    }
}
