<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, DELETE, PUT, PATCH, UPDATE, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type, Content-Encoding');
  header('Access-Control-Max-Age: 1728000');
  header('Content-Length: 0');
  header('Content-Type: text/plain');
  die();
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, Credentials, Content-Type, Content-Encoding');
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

if (isset($_SERVER['HTTP_CONTENT_ENCODING']) && $_SERVER['HTTP_CONTENT_ENCODING'] === 'gzip') {
  header('Content-Encoding: gzip');
}

const PATH_ROOT = './';


$url = $_SERVER['REQUEST_URI'] ?? '';
$url_attributes = array_values(array_filter(explode('/', $url)));

// Parsed attributes
$attr_env = $url_attributes[0] ?? null;
$attr_model = $url_attributes[1] ?? null;
$attr_mdf_1 = $url_attributes[2] ?? null;
$attr_mdf_2 = $url_attributes[3] ?? null;
$attr_mdf_3 = $url_attributes[4] ?? null;

// Default response
$response = [
  ...$url_attributes
];

// Mock data
if ($attr_env === 'private') {

  if ($attr_model === 'settings') {
    $response = [
      'project_name' => 'Project name',
      'project_description' => 'Project description ...',
    ];
  }

} else if ($attr_env === 'public') {
  $response = [
    'a' => 1,
    'b' => 2,
  ];
}

// Print JSON result
print_r(
  json_encode(
    $response,
    JSON_NUMERIC_CHECK | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES,
  )
);
