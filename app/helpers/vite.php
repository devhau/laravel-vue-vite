<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\HtmlString;

if (!function_exists('vite_assets')) {
    function vite_assets($path = 'client/main.js', $dir = 'dist'): HtmlString
    {
        $manifest = json_decode(file_get_contents(
            public_path($dir . '/manifest.json')
        ), true);

        return new HtmlString(<<<HTML
            <script type="module" src="/{$dir}/{$manifest[$path]['file']}"></script>
            <link rel="stylesheet" href="/{$dir}/{$manifest[$path]['css'][0]}">
        HTML);
    }
}
