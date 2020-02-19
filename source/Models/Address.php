<?php

namespace Source\Models;

use Source\Core\Model;

class Address extends Model
{
	/**
	 * Address constructor.
	 */
	public function __construct()
	{
		parent::__construct("addresses", ["id"], ["zip_code", "address", "state", "city", "area"]);
	}

	/**
	 * @param string $zip_code
	 * @param string $address
	 * @param string $state
	 * @param string $city
	 * @param string $area
	 * @return Address
	 */
	public function bootstrap(
		string $zip_code,
		string $address,
		string $state,
		string $city,
		string $area
	): Address {
		$this->zip_code = $zip_code;
		$this->address = $address;
		$this->state = $state;
		$this->city = $city;
		$this->area = $area;
		return $this;
	}

	/**
	 * @return bool
	 */
	public function save(): bool
	{
		if (!$this->required()) {
			$this->message->warning("CEP, endereço, estado, cidade e bairro são obrigatórios");
			return false;
		}

		/** Address Update */
		if (!empty($this->id)) {
			$addressId = $this->id;
			$this->update($this->safe(), "id = :id", "id={$this->id}");
			if ($this->fail()) {
				$this->message->error("Erro ao atualizar, verifique os dados");
				return false;
			}
		}

		/** Address Create */
		if (empty($this->id)) {
			$addressId = $this->create($this->safe());
			if ($this->fail()) {
				$this->message->error("Erro ao cadastrar, verifique os dados");
				return false;
			}
		}

		$this->data = ($this->findById($addressId))->data();
		return true;
	}
}
