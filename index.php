<?php
ob_start();

require __DIR__ . "/vendor/autoload.php";


/**
 * BOOTSTRAP
 */

use CoffeeCode\Router\Router;
use Source\Core\Session;

$session = new Session();
$route = new Router(url(), ":");
$route->namespace("Source\App");

/**
 * WEB ROUTES
 */
$route->group(null);
$route->get("/", "Web:home");

//auth
$route->group(null);
//$route->get("/entrar", "Source\App\Admin\Login:login");
//$route->post("/entrar", "Source\App\Admin\Login:login");
$route->get("/cadastrar", "Web:register");
$route->post("/cadastrar", "Web:register");

//services
$route->group(null);

/**
 * ADMIN ROUTES
 */
$route->namespace("Source\App\Admin");
$route->group("/admin");

//login
$route->get("/", "Login:root");
$route->get("/entrar", "Login:login");
$route->post("/entrar", "Login:login");

//dash
$route->get("/dash", "Dash:home");
$route->post("/dash/home", "Dash:home");
$route->get("/logoff", "Dash:logoff");

//users
$route->get("/usuarios", "Users:home");
$route->post("/usuarios", "Users:home");
$route->get("/usuarios/{search}/{page}", "Users:home");
$route->get("/usuarios/novo", "Users:create");
$route->post("/usuarios/novo", "Users:store");
$route->get("/usuarios/usuario/{user_id}", "Users:edit");
$route->put("/usuarios/usuario/{user_id}", "Users:update");
$route->get("/usuarios/deletar/{user_id}", "Users:delete");

//END ADMIN
$route->namespace("Source\App");
/**
 * ERROR ROUTES
 */
$route->group("/ops");
$route->get("/{errcode}", "Web:error");

/**
 * ROUTE
 */
$route->dispatch();

/**
 * ERROR REDIRECT
 */
if ($route->error()) {
    $route->redirect("/ops/{$route->error()}");
}

ob_end_flush();
