<?php

namespace App\Services\Category;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class Service{

    public function store($data) {
        try{
            DB::beginTransaction();
            $category = Category::create($data);
            DB::commit();
        }
        catch(\Exception $ex){
            DB::rollBack();
            return $ex->getMessage();
        }
        return $category;
    }

    public function update($category, $data) {
        try{
            DB::beginTransaction();
            $category->update($data);
            DB::commit();
        }
        catch(\Exception $ex){
            DB::rollBack();
            return $ex->getMessage();
        }
        return $category;
    }

}