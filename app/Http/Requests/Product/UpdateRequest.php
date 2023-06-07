<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|string',
            'slug' => 'required|string',
            'price' => 'required|numeric',
            'preview_description' => 'required|string',
            'detail_description' => 'required|string',
            'category_id' => 'required|integer',
            'hit' => '',
            'is_active' => ''
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Название товара - обязательное поле',
            'slug.required' => 'Символьный код - обязательное поле',
            'price.required' => 'Цена - обязательное поле',
            'preview_description.required' => 'Краткое описание - обязательное поле',
            'detail_description.required' => 'Детальное описание - обязательное поле',
            'category_id.required' => 'Категория товара - обязательное поле',
            'price.numeric' => "Цена должна быть числом"
        ];
    }
}
