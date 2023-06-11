<?php

namespace App\Http\Requests\Cart;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
            'quantity' => 'required|integer',
        ];
    }

    public function messages()
    {
        return [
            'quantity.required' => 'Кол-во товара обязательный параметр',
            'quantity.integer' => 'Кол-во товара должно быть целым числом',
        ];
    }
}
