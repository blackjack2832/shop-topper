<?php

namespace App\Http\Requests\Category;

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

    public function rules()
    {
        return [
            'title' => 'required|string',
            'slug' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Название категории - обязательное поле',
            'title.string' => 'Название категории - строковое значение',
            'slug.required' => 'Символьный код - обязательно значение',
        ];
    }
}
