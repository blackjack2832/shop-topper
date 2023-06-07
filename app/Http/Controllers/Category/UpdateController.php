<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Http\Resources\Category\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\Category\UpdateRequest;
use App\Services\Category\Service;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Category $category)
    {
        $data = $request->validated();
        $service = new Service();
        $result = $service->update($category, $data);
        return $result;
    }
}
