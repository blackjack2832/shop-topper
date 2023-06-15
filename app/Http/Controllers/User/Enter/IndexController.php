<?php

namespace App\Http\Controllers\User\Enter;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke()
    {
        return view('pages.auth');
    }
}
