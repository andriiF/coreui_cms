<?php

namespace App\Repository;

use App\Interface\UserRepositoryInterface;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserRepository implements UserRepositoryInterface
{

    public function getAuthUser(): User
    {
        $auth = Auth::user();

        return User::select(['name', 'email', 'avatar', 'id'])->find($auth->id);
    }

    public function find(int $id, array $with = null): User|Model
    {
        if (empty($with)) {
            return User::find($id);
        }

        return User::with($with)->find($id);
    }

    public function update(int $id, $data): void
    {
        DB::beginTransaction();
        try {
            $user = $this->find($id);
            $user->update($data);
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
        DB::commit();
    }
}
