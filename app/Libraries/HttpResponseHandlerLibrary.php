<?php

namespace App\Libraries;

use Symfony\Component\HttpFoundation\Response;
use App\Libraries\AppConstantsLibrary as AppConst;

/**
 * Class   : HttpResponseHandlerLibrary
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class HttpResponseHandlerLibrary
{

    /**
     * Formats success responses
     * 
     * @param string $sMessage
     * @param mixed  $mData
     * @param int    $iCode
     * @return mixed
     */
    public static function formatSuccessResponse($sMessage, $mData, $iCode = Response::HTTP_OK)
    {
        return response()->json([
            AppConst::CODE    => $iCode,
            AppConst::MESSAGE => $sMessage,
            AppConst::DATA    => $mData,
        ])->setStatusCode($iCode);
    }

    /**
     * Formats error responses
     * 
     * @param \Throwable
     * @return mixed
     */
    public static function formatErrorResponse(\Throwable $oException)
    {
        $iErrCode = empty($oException->getCode()) ? Response::HTTP_INTERNAL_SERVER_ERROR : $oException->getCode();
        return response()->json([
            AppConst::CODE    => $iErrCode,
            AppConst::MESSAGE => $oException->getMessage(),
            AppConst::DATA    => null,
        ])->setStatusCode(500);
    }
}