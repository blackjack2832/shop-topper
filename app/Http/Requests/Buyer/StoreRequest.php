<?php

namespace App\Http\Requests\Buyer;

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
            'email' => 'required|string',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'phone_number' => 'required|string',
            'address_id' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Email - обязательное поле',
            'first_name.required' => 'Имя - обязательное поле',
            'last_name.required' => 'Фамилия - обязательное поле',
            'phone_number.required' => 'Номер телефона - обязательное поле',
            'address_id.required' => 'Адрес магазина - обязательное поле'
        ];
    }
}
