  // Dados fictícios dos projetos
  const projetos = {
    alimentacao: {
      titulo: "Alimentação Saudável",
      imagem: "assets/imagens/alimentacao_saudavel.png",
      descricao: "Este é um projeto fictício criado para fins acadêmicos. O objetivo é promover hábitos alimentares saudáveis para crianças e famílias, fornecendo orientações nutricionais, workshops de culinária e atividades educativas."
    },
    educacao: {
      titulo: "Educação para Todos",
      imagem: "assets/imagens/educacao_todos.jpg",
      descricao: "Projeto acadêmico que visa oferecer acesso à educação básica de qualidade para todos, com cursos, mentorias e atividades educativas em diversas comunidades."
    },
    equipe: {
      titulo: "Equipe Reunida",
      imagem: "assets/imagens/equipe_reunida.png",
      descricao: "Projeto que incentiva o trabalho colaborativo e integração das equipes comunitárias, promovendo encontros, capacitações e eventos para fortalecer a equipe."
    }
  };

  // Pegar o parâmetro da URL
  const params = new URLSearchParams(window.location.search);
  const projetoId = params.get('projeto');

  // Preencher conteúdo dinamicamente
  if (projetoId && projetos[projetoId]) {
    document.getElementById('project-image').src = projetos[projetoId].imagem;
    document.getElementById('project-image').alt = projetos[projetoId].titulo;
    document.getElementById('project-title').textContent = projetos[projetoId].titulo;
    document.getElementById('project-description').textContent = projetos[projetoId].descricao;
  } else {
    document.getElementById('project-title').textContent = "Projeto não encontrado";
    document.getElementById('project-description').textContent = "O projeto solicitado não existe.";
  }
