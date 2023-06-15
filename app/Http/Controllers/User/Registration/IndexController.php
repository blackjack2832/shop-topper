<?php

namespace App\Http\Controllers\User\Registration;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke()
    {
        return view('pages.registration');
    }
}
