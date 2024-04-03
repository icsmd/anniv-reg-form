<?php

namespace App\Libraries;

use Illuminate\Support\Facades\Http;

class HttpRequestHandlerLibrary
{
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