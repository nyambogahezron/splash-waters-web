<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class EnsureIsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        // Check if the user is an admin
        if (Auth::user()->role !== 'admin') {

            // if can go back to the previous page or abort

            if ($request->header('referer')) {
                return redirect()->back()->with('error', 'You are not authorized to access this page.');
            }

            abort(403, 'Unauthorized action');
        }

        return $next($request);
    }
}
