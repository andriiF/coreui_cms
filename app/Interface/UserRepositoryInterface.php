<?php

namespace App\Interface;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

interface UserRepositoryInterface
{
    public function getAuthUser(): User;

    public function find(int $id, array $with = null): User|Model;

    public function update(int $id, $data): void;
}
