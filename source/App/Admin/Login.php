<?php

namespace Source\App\Admin;

use Source\Core\Controller;
use Source\Models\Auth;

/**
 * Class Login
 * @package Source\App\Admin
 */
class Login extends Controller
{
    /**
     * Login constructor.
     */
    public function __construct()
    {
        parent::__construct(__DIR__ . "/../../../themes/" . CONF_VIEW_THEME . "/");
    }


    public function root(): void
    {
        if (Auth::user()) {
            redirect("/admin/dash");
        } else {
            redirect("/login");
        }
    }

    /**
     * @param array|null $data
     */
    public function login(?array $data): void
    {
//    	die('teste');

        $user = Auth::user();

        if ($user) {
            redirect("/admin/dash");
        }

        if (!empty($data["email"]) && !empty($data["password"])) {
            if (request_limit("loginLogin", 3, 5 * 60)) {
                $json["message"] = $this->message->error("ACESSO NEGADO: Aguarde por 5 minutos para tentar novamente.")->render();
                echo json_encode($json);
                return;
            }

            $auth = new Auth();
            $login = $auth->login($data["email"], $data["password"], true, 5);

            if ($login) {
                $json["redirect"] = url("/admin/dash");
            } else {
                $json["message"] = $auth->message()->render();
            }

            echo json_encode($json);
            return;
        }

        $head = $this->seo->render(
            CONF_SITE_NAME . " | Admin",
            CONF_SITE_DESC,
            url("/admin"),
            theme("/assets/images/image.jpg", CONF_VIEW_ADMIN),
            false
        );

        echo $this->view->render("auth-login", [
            "head" => $head
        ]);
    }
}
