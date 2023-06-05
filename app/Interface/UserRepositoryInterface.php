<?php

namespace App\Interface;

use App\Models\User;

interface UserRepositoryInterface
{
    public function getAuthUser(): User;
}
