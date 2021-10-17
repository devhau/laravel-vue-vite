<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\HtmlString;

if (!function_exists('vite_assets')) {
    function vite_assets(): HtmlString
    {
        /*
        $devServerIsRunning = false;

        if (app()->environment('local')) {
            try {
                Http::get("http://localhost:3000");
                $devServerIsRunning = true;
            } catch (Exception $ex) {
            }
        }

        if ($devServerIsRunning) {
            return new HtmlString(<<<HTML
                <script type="module" src="http://localhost:3000/@vite/client"></script>
                <script type="module" src="http://localhost:3000/resources/js/app.js"></script>
            HTML);
        }
*/
        $manifest = json_decode(file_get_contents(
            public_path('dist/manifest.json')
        ), true);

        return new HtmlString(<<<HTML
            <script type="module" src="/dist/{$manifest['client/main.js']['file']}"></script>
            <link rel="stylesheet" href="/dist/{$manifest['client/main.js']['css'][0]}">
        HTML);
    }
}
