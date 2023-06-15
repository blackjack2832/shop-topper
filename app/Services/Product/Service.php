<?php

namespace App\Services\Product;

use App\Models\Product;
use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\ProductImage;

class Service{
    
    public function store($data, $categoryId) {
        try {
            DB::beginTransaction();
            $images = [];
            $category = Category::find($categoryId);

            if(empty($category))
               return response()->json(['message' => 'Такой категории не существует'], 422);

            if (key_exists('images', $data)) {
                $images = $data['images'];
                unset($data['images']);
            }

            $product = Product::create($data);
            $this->createImages($images, $product->id);

            DB::commit();
        }
        catch(\Exception $ex) {
            DB::rollBack();
            return $ex->getMessage();
        }
        return $product;
    }

    public function update($product, $data, $categoryId){
        try{
            DB::beginTransaction();
            $category = Category::find($categoryId);

            if (empty($category)) {
               return response()->json(['message' => 'Такой категории не существует'], 422);
            }
            $product->update($data);
            DB::commit();
        }
        catch(\Exception $ex){
            DB::rollBack();
            return $ex->getMessage();
        }
        return $product;
    }

    protected function createImages($images, $productId) {
        foreach ($images as $image) {
            $name = md5(Carbon::now() . '_' . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();
            $filePath = Storage::disk('public')->putFileAs('/images', $image, $name);
            ProductImage::create([
                'path' => $filePath,
                'url' => url('/storage/app/public/' . $filePath),
                'product_id' => $productId
            ]);
        }
    }
}