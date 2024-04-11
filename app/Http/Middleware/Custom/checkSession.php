<?php

namespace App\Http\Middleware\Custom;

use Closure;
use App\Libraries\SessionHelperLibrary as Session;
use App\Libraries\SecuredRoutesLibrary as SecRoutes;
use Illuminate\Http\Request;

/**
 * Class   : CheckSession
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class checkSession
{
    /**
     * Handle an incoming request.
     * - Checks if the active user is allowed to access a particular route
     * - Access is determined by agency code
     */
    public function handle(Request $request, Closure $next)
    {
        $sRequestPath = $request->getPathInfo();
        $sUserType = Session::getSession('u_session.agency');
        if ($sUserType === null) {
            return redirect('/');
        } else {
            $sRevisedPath = preg_replace('/\d+/', '', $sRequestPath);
            $aRetrievedRoute = array_filter(
                SecRoutes::SECURED_ROUTES[$sUserType],
                function ($sValue, $sKey) use ($sRevisedPath) {
                    return $sValue === $sRevisedPath;
                },
                ARRAY_FILTER_USE_BOTH
            );
            if (empty($aRetrievedRoute) === true) {
                return redirect('/404');
            } else {
                return $next($request);
            }
        }
    }
}
