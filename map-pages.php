<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <title>EGRP</title>
</head>
<body>
    <h1>EGRP</h1>
    <ol>
<?php
    $files = scandir(__DIR__);
    $htmls = [];
    foreach ($files as $file) {
        $i = pathinfo($file);
        if ($i['extension'] === 'html') $htmls[] = $file;
    }
    sort($htmls,SORT_STRING | SORT_FLAG_CASE);
    foreach ($htmls as $html) {
        echo "<li><a href='/{$html}' target='_blank'>{$html}</a></li>";
    }
?>
    </ol>
</body>
