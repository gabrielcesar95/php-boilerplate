<?php

namespace Source\App\Admin;

use Source\Models\Address;
use Source\Models\User;
use Source\Support\Pager;
use Source\Support\Thumb;
use Source\Support\Upload;

/**
 * Class Users
 * @package Source\App\Admin
 */
class Users extends Admin
{
	/**
	 * Users constructor.
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * @param array|null $data
	 */
	public function home(?array $data): void
	{
		//search redirect
		if (!empty($data["s"])) {
			$s = str_search($data["s"]);
			echo json_encode(["redirect" => url("/admin/usuarios/{$s}/1")]);
			return;
		}

		$search = null;
		$users = (new User())->find();

		if (!empty($data["search"]) && str_search($data["search"]) != "all") {
			$search = str_search($data["search"]);
			$users = (new User())->find("MATCH(name, email) AGAINST(:s)", "s={$search}");
			if (!$users->count()) {
				$this->message->info("Sua pesquisa não retornou resultados")->flash();
				redirect("/admin/usuarios");
			}
		}

		$all = ($search ?? "all");
		$pager = new Pager(url("/admin/usuarios/{$all}/"));
		$pager->pager($users->count(), 12, (!empty($data["page"]) ? $data["page"] : 1));

		$head = $this->seo->render(
			CONF_SITE_NAME . " | Usuários",
			CONF_SITE_DESC,
			url("/admin"),
			url("/admin/assets/images/image.jpg"),
			false
		);

		echo $this->view->render("users/home", [
			"app" => "usuarios/home",
			"head" => $head,
			"search" => $search,
			"users" => $users->order("name")->limit($pager->limit())->offset($pager->offset())->fetch(true),
			"paginator" => $pager->render()
		]);
	}

	public function create(?array $data): void
	{
		$head = $this->seo->render(
			CONF_SITE_NAME . " | Novo Usuário",
			CONF_SITE_DESC,
			url("/admin"),
			url("/admin/assets/images/image.jpg"),
			false
		);

		echo $this->view->render("users/form", [
			"app" => "users/form",
			"head" => $head
		]);
	}

	public function store(?array $data): void
	{
		if (isset($data) && $data) {
			$data = filter_var_array($data, FILTER_SANITIZE_STRIPPED);

			$userCreate = new User();
			$userCreate->name = $data["name"];
			$userCreate->email = $data["email"];
			$userCreate->password = $data["password"];
			$userCreate->birth_date = date_fmt_back($data["birth_date"]);

			//upload photo
			if (!empty($_FILES["photo"])) {
				$files = $_FILES["photo"];
				$upload = new Upload();
				$image = $upload->image($files, $userCreate->name, 600);

				if (!$image) {
					$json["message"] = $upload->message()->render();
					echo json_encode($json);
					return;
				}

				$userCreate->photo = $image;
			}

			if (isset($data['address']) && $data['address']) {
				$addressCreate = new Address();
				$addressCreate->zip_code = $data['address']['zip_code'];
				$addressCreate->address = $data['address']['address'];
				$addressCreate->state = $data['address']['state'];
				$addressCreate->city = $data['address']['city'];
				$addressCreate->area = $data['address']['area'];
				$addressCreate->number = $data['address']['number'] ?? null;
				$addressCreate->details = $data['address']['details'] ?? null;
			}

			if (!$userCreate->save()) {
				$json["message"] = $userCreate->message()->render();
				echo json_encode($json);
				return;
			}

			if ($addressCreate->save()) {
				$userCreate->address_id = $addressCreate->id;
				$userCreate->save();
			}

			$this->message->success("Usuário cadastrado com sucesso!")->flash();
			$json["redirect"] = url("/admin/usuarios");

			echo json_encode($json);
		}
		return;
	}

	public function edit(?array $data): void
	{
		$userEdit = null;
		if (!empty($data["user_id"])) {
			$userId = filter_var($data["user_id"], FILTER_VALIDATE_INT);
			$userEdit = (new User())->findById($userId);
		}

		$head = $this->seo->render(
			CONF_SITE_NAME . " | {$userEdit->name}",
			CONF_SITE_DESC,
			url("/admin"),
			url("/admin/assets/images/image.jpg"),
			false
		);

		echo $this->view->render("users/form", [
			"app" => "users/form",
			"head" => $head,
			"user" => $userEdit
		]);
	}

	public function update(?array $data): void
	{
		if (isset($data) && $data) {
			$data = filter_var_array($data, FILTER_SANITIZE_STRIPPED);
			$userUpdate = (new User())->findById((int)$data["user_id"]);

			if (!$userUpdate) {
				$this->message->error("Você tentou gerenciar um usuário que não existe")->flash();
				echo json_encode(["redirect" => url("/admin/usuarios")]);
				return;
			}

			$userUpdate->name = $data["name"];
			$userUpdate->email = $data["email"];
			$userUpdate->password = (!empty($data["password"]) ? $data["password"] : $userUpdate->password);
			$userUpdate->birth_date = date_fmt_back($data["birth_date"]);

			//upload photo
			if (!empty($_FILES["photo"])) {
				if ($userUpdate->photo && file_exists(__DIR__ . "/../../../" . CONF_UPLOAD_DIR . "/{$userUpdate->photo}")) {
					unlink(__DIR__ . "/../../../" . CONF_UPLOAD_DIR . "/{$userUpdate->photo}");
					(new Thumb())->flush($userUpdate->photo);
				}

				$files = $_FILES["photo"];
				$upload = new Upload();
				$image = $upload->image($files, $userUpdate->name, 600);

				if (!$image) {
					$json["message"] = $upload->message()->render();
					echo json_encode($json);
					return;
				}

				$userUpdate->photo = $image;
			}

			if (isset($data['address']) && $data['address']) {
				$addressUpdate = $userUpdate->address_id ? (new Address())->findById($userUpdate->address_id) : new Address();
				$addressUpdate->zip_code = $data['address']['zip_code'];
				$addressUpdate->address = $data['address']['address'];
				$addressUpdate->state = $data['address']['state'];
				$addressUpdate->city = $data['address']['city'];
				$addressUpdate->area = $data['address']['area'];
				$addressUpdate->number = $data['address']['number'] ?? null;
				$addressUpdate->details = $data['address']['details'] ?? null;
			}

			if (!$userUpdate->save()) {
				$json["message"] = $userUpdate->message()->render();
				echo json_encode($json);
				return;
			}

			if ($addressUpdate->save()) {
				$userUpdate->address_id = $addressUpdate->id;
				$userUpdate->save();
			}

			$this->message->success("Usuário atualizado com sucesso!")->flash();
			$json["redirect"] = url("/admin/usuarios");
			echo json_encode($json);
		}
		return;
	}

	public function delete(?array $data): void
	{
		if (isset($data['user_id']) && $data['user_id']) {
			$data = filter_var_array($data, FILTER_SANITIZE_STRIPPED);
			$userDelete = (new User())->findById($data["user_id"]);

			if (!$userDelete) {
				$this->message->error("Você tentou deletar um usuário que não existe")->flash();
				redirect('admin/usuarios');
			}

			if ($userDelete->photo && file_exists(__DIR__ . "/../../../" . CONF_UPLOAD_DIR . "/{$userDelete->photo}")) {
				unlink(__DIR__ . "/../../../" . CONF_UPLOAD_DIR . "/{$userDelete->photo}");
				(new Thumb())->flush($userDelete->photo);
			}

			$userDelete->destroy();

			$this->message->success("O usuário foi excluído com sucesso!")->flash();
		}
		redirect('admin/usuarios');
		return;
	}

	/**
	 * @param array|null $data
	 * @throws \Exception
	 */
	public function user(?array $data): void
	{
		//TODO: User address

		$userEdit = null;
		if (!empty($data["user_id"])) {
			$userId = filter_var($data["user_id"], FILTER_VALIDATE_INT);
			$userEdit = (new User())->findById($userId);
		}

		$head = $this->seo->render(
			CONF_SITE_NAME . " | " . ($userEdit ? "Perfil de {$userEdit->name}" : "Novo Usuário"),
			CONF_SITE_DESC,
			url("/admin"),
			url("/admin/assets/images/image.jpg"),
			false
		);

		echo $this->view->render("widgets/users/user", [
			"app" => "usuarios/user",
			"head" => $head,
			"user" => $userEdit
		]);
	}
}
