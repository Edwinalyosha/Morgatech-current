<?php
header('Content-Type: application/javascript');

// Cache file location
$cacheFile = 'cache/widget.js';
$cacheTime = 86400; // Cache duration in seconds, e.g., 3600 seconds = 1 hour

// Check if the cache file exists and is still valid
if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < $cacheTime)) {
    // Serve the file from cache
    readfile($cacheFile);
} else {
    // URL of the third-party JavaScript file
    $thirdPartyURL = 'https://repairpal.com/estimator_widget_v3/load_setup.js?id=425248';
    // Fetch the file from the third-party server
    $jsContent = file_get_contents($thirdPartyURL);

    if ($jsContent === FALSE) {
        // Unable to fetch the file, try to serve the old cache if exists
        if (file_exists($cacheFile)) {
            readfile($cacheFile);
        } else {
            echo '/* Error: Unable to load the external JavaScript file and no cached version available. */';
            http_response_code(500); // Internal Server Error
        }
    } else {
        // Save the new content to the cache
        file_put_contents($cacheFile, $jsContent);
        // Output the new content
        echo $jsContent;
    }
}
?>
