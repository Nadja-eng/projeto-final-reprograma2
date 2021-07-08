import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Axios from "axios";
import "./style.css";

//https://api.github.com/users/Nadja-eng/repos

const MinhaPagina = () => {
  const [repos, setRepos] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtroRepos, setFiltroRepos] = useState([]);

  useEffect(() => {
    const dadosList = async () => {
      const resposta = await Axios.get(
        "https://api.github.com/users/Nadja-eng/repos"
      );
      setRepos(resposta.data);
    };
    dadosList();
  }, []);

  useEffect(() => {
    setFiltroRepos(
      repos.filter((repo) => {
        return repo.name.includes(busca);
      })
    );
  }, [busca, repos]);

  return (
    <>
      <Menu />
      <div className="busca">
        <input
          onChange={(e) => {
            setBusca(e.target.value);
          }}
          placeholder="Digite um Repo"
        />
        {filtroRepos.map((repo) => (
          <p className="list">{repo.name}</p>
        ))}
      </div>
    </>
  );
};

export default MinhaPagina;
