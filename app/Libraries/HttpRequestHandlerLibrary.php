<?php

namespace App\Libraries;

use Illuminate\Support\Facades\Http;

/**
 * Class   : AppConstantsLibrary
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class HttpRequestHandlerLibrary
{
    /**
     * Handles all internal API requests
     * @param string $sRequestUrl
     * @param string $sMethod
     * @param array  $aParams
     * @return mixed
     * @throws \Throwable
     */
    public static function requestInternalApi($sRequestUrl, $sMethod, $aParams = [])
    {
        try {
            $sInternalApiHost = config("app.api_url");
            $sApiVersion = config("app.api_version");
            $sCompleteUrl = "$sInternalApiHost/$sApiVersion/$sRequestUrl";
            $mResult = Http::$sMethod($sCompleteUrl, $aParams);
            return $mResult->json();
        } catch (\Throwable $oException) {
            return $oException;
        }
    }
}