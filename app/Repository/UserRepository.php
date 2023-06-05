<?php

namespace App\Repository;

use App\Interface\UserRepositoryInterface;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserRepository implements UserRepositoryInterface
{

    public function getAuthUser(): User
    {
        $auth = Auth::user();

        return User::select(['name', 'email', 'avatar','id'])->find($auth->id);
    }
}
