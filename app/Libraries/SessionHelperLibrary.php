<?php

namespace App\Libraries;

/**
 * Class   : SessionHelperLibrary
 * Author  : C.O.B
 * Dated   : 04/11/24
 * Version : 1.0
 */
class SessionHelperLibrary
{
    /**
     * Retrieves session data by key
     * @param string $sKey
     * @return string
     */
    public static function getSession($sKey)
    {
        return session($sKey);
    }

    /**
     * Retrieves session data by key and value
     * @param string $sKey
     * @param string $sValue
     * @return string
     */
    public static function getSessionValue($sKey, $sValue)
    {
        return session($sKey, $sValue);
    }

    /**
     * Sets/Saves session data by key and value
     * @param string $sKey
     * @param mixed  $mValue
     * @return null
     */
    public static function setSession($sKey, $mValue)
    {
        session([ $sKey => $mValue ]);
    }
}