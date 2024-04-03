<?php

namespace App\Libraries;
use Illuminate\Http\Response;


/**
 * Class: HttpResponseHandlerLibrary
 * Namespace: App\Libraries
 * Author: Cristian Balatbat
 * Created: 01/16/2024
 * Version: 1.0
 */
class HttpResponseHandlerLibrary
{
    const CODE = "code";
    const MESSAGE = "message";
    const DATA = "data";

    /**
     * Formats success responses
     * 
     * param string $sMessage
     * param mixed  $mData
     * param int    $iCode
     * return array
     */
    public static function formatSuccessResponse($sMessage, $mData, $iCode = Response::HTTP_OK)
    {
        return response()->json([
            self::CODE    => $iCode,
            self::MESSAGE => $sMessage,
            self::DATA    => $mData,
        ])->setStatusCode($iCode);
    }

    /**
     * Formats error responses
     * 
     * param \Throwable $oException
     * return array
     */
    public static function formatErrorResponse(\Throwable $oException)
    {
        $iErrCode = empty($oException->getCode()) ? Response::HTTP_INTERNAL_SERVER_ERROR : $oException->getCode();
        return response()->json([
            self::CODE    => $iErrCode,
            self::MESSAGE => $oException->getMessage(),
            self::DATA    => null,
        ])->setStatusCode(500);
    }
}