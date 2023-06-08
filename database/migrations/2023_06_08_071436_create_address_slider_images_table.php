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
            $table->string('address')->nullable();
            $table->string('message')->nullable();
            $table->string('phone')->nullable();
            $table->string('opening_hours')->nullable();
            $table->string('next_address_title')->nullable();
            $table->string('back_address_title')->nullable();
            $table->unsignedBigInteger('image_id');
            $table->timestamps();
            $table->softDeletes();
            $table->index('image_id', 'asi_image_idx');
            $table->foreign('image_id', 'asi_image_fk')->on('images')->references('id');
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
