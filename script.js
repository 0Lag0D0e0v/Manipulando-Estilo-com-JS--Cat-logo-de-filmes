const btnDark = document.getElementById("btn-dark");
        btnDark.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            // Troca o texto do botão
            btnDark.textContent =
                document.body.classList.contains("dark-mode")
                    ? "Modo Claro"
                    : "Modo Escuro";
        });

        // Botões Favoritar dos cards
        const botoesFavoritar = document.querySelectorAll(".btn-fav");

        botoesFavoritar.forEach((btn) => {
            btn.addEventListener("click", () => {
                const card = btn.parentElement;
                card.classList.toggle("favorito");

                // Troca texto do botão
                btn.textContent = card.classList.contains("favorito")
                    ? "Favorito ⭐"
                    : "Favoritar";
            });
        });

