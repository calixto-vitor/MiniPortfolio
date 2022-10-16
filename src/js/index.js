// passo 1 - dar um jeito de pegar os elementos que representam as tabs no HTML
const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  // passo 2 - dar um jeito de identificar o clique no elemento da tab
  tab.addEventListener("click", function () {
    if (tab.classList.contains("select")) {
      return;
    } else {
      selectTab(tab);
      showTabInfo(tab);
    }
  });
});

function selectTab(tab) {
  // passo 3 - quando o usuário clicar, desmarcar a tab selecionada
  const selectedTab = document.querySelector(".tab.select");
  selectedTab.classList.remove("select");

  // passo 4 - marcar a tab clicada como select
  tab.classList.add("select");
}

function showTabInfo(tab) {
  // passo 5 - esconder o conteúdo anterior
  const selectedInfo = document.querySelector(".info.select");
  selectedInfo.classList.remove("select");

  // passo 6 - mostrar o conteúdo da tab selecionada
  const idInfoTab = `info-${tab.id}`;

  const infoToBeShown = document.getElementById(idInfoTab);
  infoToBeShown.classList.add("select");
}
