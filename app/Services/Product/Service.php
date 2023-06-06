<?php

namespace App\Services\Product;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class Service{
    
    public function store($data, $categoryId) {
        try{
            DB::beginTransaction();
            $category = Category::find($categoryId);

            if(empty($category)){
               return response()->json(['message' => 'Такой категории не существует'], 422);
            }
            $product = Product::create($data);
            DB::commit();
        }
        catch(\Exception $ex){
            DB::rollBack();
            return $ex->getMessage();
        }
        return $product;
    }
}