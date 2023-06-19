<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id');
            $table->unsignedBigInteger('product_id');
            $table->integer('quantity');
            $table->float('total_price');
            $table->timestamps();
            $table->softDeletes();

            $table->index('order_id', 'order_item_order_idx');
            $table->foreign('order_id', 'order_item_order_fk')->on('orders')->references('id')->onDelete('cascade');
            $table->index('product_id', 'order_item_product_idx');
            $table->foreign('product_id', 'order_item_product_fk')->on('products')->references('id')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_items');
    }
}
