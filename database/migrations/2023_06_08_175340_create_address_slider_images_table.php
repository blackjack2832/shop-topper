<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressSliderImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('address_slider_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('order');
            $table->string('path');
            $table->string('url');
            $table->string('address');
            $table->string('message');
            $table->string('phone_number');
            $table->string('opening_hours');
            $table->string('next_address')->nullable();
            $table->string('back_address')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('address_slider_images');
    }
}
