<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserUpdateRequest;
use App\Interface\UserRepositoryInterface;
use Illuminate\Http\Request;

class ProfileController extends Controller
{

    public function __construct(protected UserRepositoryInterface $userRepository)
    {

    }

    public function update(UserUpdateRequest $request, $id)
    {
        $this->userRepository->update($id, $request->only(['name', 'email']));
    }
}
