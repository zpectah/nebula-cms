<?php

class Router {

  private function getParsedUrl(): array {
    $url = $_SERVER['REQUEST_URI'] ?? '';
    $url_parsed = parse_url($url);
    $url_path = $url_parsed['path'] ?? '';
    $url_attributes = array_values(array_filter(explode('/', $url_path)));
    $url_query = [];

    if (!empty($url_parsed['query'])) {
      parse_str($url_parsed['query'], $url_query);
    }

    return [
      'url' => $url,
      'query' => $url_query,
      'env' => $url_attributes[0] ?? null,
      'model' => $url_attributes[1] ?? null,
      'a1' => $url_attributes[2] ?? null,
      'a2' => $url_attributes[3] ?? null,
      'a3' => $url_attributes[4] ?? null,
      'a4' => $url_attributes[5] ?? null,
      'a5' => $url_attributes[6] ?? null,
    ];
  }

  public function resolveRequest(): array {
    $parsed_url = $this -> getParsedUrl();
    $environment = $parsed_url['env'];
    $model = $parsed_url['model'];

    // Default response
    $response = [
      ...$parsed_url
    ];

    // Mock data
    if ($environment === 'private') {
      $id = $parsed_url['a1'];

      switch ($model) {

        case 'settings':
          $response = [
            'project_name' => 'Project name',
            'project_description' => 'Project description ...',

            'locales_active' => ['en', 'cs'],
            'locales_default' => 'en',
            'locales_available' => ['en', 'cs', 'sk', 'de'],
          ];
          break;

        case 'articles':
          $now = date('c'); // ISO 8601 format

          if ($id) {
            // Mock detail
            $response = [
              'id' => $id,
              'name' => 'article-name-' . $id,
              'locale' => [
                'en' => [
                  'title' => "Article title EN $id",
                  'description' => "Article description EN $id",
                  'content' => "Article content EN $id",
                ],
                'cs' => [
                  'title' => "Article title CS $id",
                  'description' => "Article description CS $id",
                  'content' => "Article content CS $id",
                ],
              ],
              'active' => 1,
              'deleted' => 0,
              'created' => $now,
              'updated' => $now,
            ];
          } else {
            // Mock list
            $articles = [];

            for ($i = 1; $i <= 25; $i++) {
              $articles[] = [
                'id' => $i,
                'name' => "article-name-$i",
                'locale' => [
                  'en' => [
                    'title' => "Article title EN $i",
                    'description' => "Article description EN $i",
                    'content' => "Article content EN $i",
                  ],
                  'cs' => [
                    'title' => "Article title CS $i",
                    'description' => "Article description CS $i",
                    'content' => "Article content CS $i",
                  ],
                ],
                'active' => 1,
                'deleted' => 0,
                'created' => $now,
                'updated' => $now,
              ];
            }

            $response = [
              ...$articles,
            ];
          }
          break;

      }

    } else if ($environment === 'public') {
      $response = [
        'a' => 1,
        'b' => 2,
      ];
    }

    // As data
    return $response;
  }

}
