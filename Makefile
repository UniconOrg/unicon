# =============================================================================
# Makefile - Unicon Landing
# Comandos para desarrollo local con Docker Compose
# =============================================================================

# Configuracion
COMPOSE = docker compose
SERVICE = unicon-landing
CONTAINER = unicon-landing
PORT = 3001

# Colores
GREEN  = \033[0;32m
YELLOW = \033[0;33m
CYAN   = \033[0;36m
RED    = \033[0;31m
BOLD   = \033[1m
RESET  = \033[0m

.PHONY: help up down restart stop start pause unpause \
        logs status info health \
        shell shell-root \
        install lint \
        clean permissions fix-cambios \
        build rebuild build-no-cache destroy reset nuke \
        env-check env-show url ports network-inspect

# =============================================================================
# Ayuda
# =============================================================================

help: ## Muestra esta ayuda
	@echo ""
	@echo "$(BOLD)$(CYAN)  Unicon Landing - Comandos disponibles$(RESET)"
	@echo "$(CYAN)  =======================================$(RESET)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-20s$(RESET) %s\n", $$1, $$2}'
	@echo ""

# =============================================================================
# Ciclo de vida del contenedor
# =============================================================================

up: ## Levanta los contenedores en segundo plano
	@echo "$(GREEN)>>> Levantando contenedores...$(RESET)"
	$(COMPOSE) up -d
	@echo "$(GREEN)>>> Contenedores listos$(RESET)"
	@echo "$(CYAN)>>> App disponible en: http://localhost:$(PORT)$(RESET)"

down: ## Detiene y elimina los contenedores
	@echo "$(YELLOW)>>> Deteniendo contenedores...$(RESET)"
	$(COMPOSE) down
	@echo "$(GREEN)>>> Contenedores eliminados$(RESET)"

restart: ## Reinicia los contenedores
	@echo "$(YELLOW)>>> Reiniciando contenedores...$(RESET)"
	$(COMPOSE) restart
	@echo "$(GREEN)>>> Contenedores reiniciados$(RESET)"

stop: ## Detiene los contenedores sin eliminarlos
	@echo "$(YELLOW)>>> Deteniendo contenedores...$(RESET)"
	$(COMPOSE) stop

start: ## Inicia contenedores previamente detenidos
	@echo "$(GREEN)>>> Iniciando contenedores...$(RESET)"
	$(COMPOSE) start

pause: ## Pausa los contenedores
	@echo "$(YELLOW)>>> Pausando contenedores...$(RESET)"
	$(COMPOSE) pause

unpause: ## Reanuda contenedores pausados
	@echo "$(GREEN)>>> Reanudando contenedores...$(RESET)"
	$(COMPOSE) unpause

# =============================================================================
# Monitoreo y diagnostico
# =============================================================================

logs: ## Muestra logs en tiempo real
	$(COMPOSE) logs -f $(SERVICE)

status: ## Muestra el estado de los contenedores
	@echo "$(CYAN)>>> Estado de contenedores:$(RESET)"
	$(COMPOSE) ps

info: ## Muestra informacion detallada del contenedor
	@echo "$(CYAN)>>> Informacion del contenedor:$(RESET)"
	@docker inspect $(CONTAINER) --format '{{.State.Status}}' 2>/dev/null || echo "$(RED)Contenedor no encontrado$(RESET)"
	@echo ""
	@docker inspect $(CONTAINER) --format 'Estado: {{.State.Status}} | Inicio: {{.State.StartedAt}}' 2>/dev/null || true

health: ## Muestra el estado de salud del contenedor
	@echo "$(CYAN)>>> Health check:$(RESET)"
	@docker inspect $(CONTAINER) --format '{{.State.Health.Status}}' 2>/dev/null || echo "$(RED)Sin healthcheck o contenedor no encontrado$(RESET)"

# =============================================================================
# Acceso al contenedor
# =============================================================================

shell: ## Abre una shell en el contenedor (usuario app)
	@echo "$(CYAN)>>> Abriendo shell...$(RESET)"
	docker exec -it $(CONTAINER) sh

shell-root: ## Abre una shell como root
	@echo "$(CYAN)>>> Abriendo shell como root...$(RESET)"
	docker exec -it -u root $(CONTAINER) sh

# =============================================================================
# Desarrollo
# =============================================================================

install: ## Ejecuta bun install dentro del contenedor
	@echo "$(GREEN)>>> Instalando dependencias...$(RESET)"
	docker exec -it $(CONTAINER) bun install
	@echo "$(GREEN)>>> Dependencias instaladas$(RESET)"

lint: ## Ejecuta el linter dentro del contenedor
	@echo "$(CYAN)>>> Ejecutando linter...$(RESET)"
	docker exec -it $(CONTAINER) bun lint

# =============================================================================
# Limpieza y permisos
# =============================================================================

clean: ## Elimina volumenes huerfanos
	@echo "$(YELLOW)>>> Limpiando volumenes huerfanos...$(RESET)"
	$(COMPOSE) down --remove-orphans
	@echo "$(GREEN)>>> Limpieza completada$(RESET)"

permissions: ## Corrige permisos del proyecto
	@echo "$(YELLOW)>>> Corrigiendo permisos...$(RESET)"
	sudo chown -R $$(id -u):$$(id -g) .
	@echo "$(GREEN)>>> Permisos corregidos$(RESET)"

fix-cambios: ## Corrige permisos y reinicia contenedores
	@echo "$(YELLOW)>>> Corrigiendo permisos y reiniciando...$(RESET)"
	sudo chown -R $$(id -u):$$(id -g) .
	$(COMPOSE) restart
	@echo "$(GREEN)>>> Listo$(RESET)"

# =============================================================================
# Build y reconstruccion
# =============================================================================

build: ## Construye las imagenes sin cache de layers
	@echo "$(GREEN)>>> Construyendo imagenes...$(RESET)"
	$(COMPOSE) build
	@echo "$(GREEN)>>> Build completado$(RESET)"

rebuild: ## Reconstruye y levanta los contenedores
	@echo "$(GREEN)>>> Reconstruyendo y levantando...$(RESET)"
	$(COMPOSE) up -d --build
	@echo "$(GREEN)>>> Rebuild completado$(RESET)"
	@echo "$(CYAN)>>> App disponible en: http://localhost:$(PORT)$(RESET)"

build-no-cache: ## Construye sin cache de Docker
	@echo "$(YELLOW)>>> Construyendo sin cache...$(RESET)"
	$(COMPOSE) build --no-cache
	@echo "$(GREEN)>>> Build sin cache completado$(RESET)"

destroy: ## Elimina contenedores y volumenes del proyecto
	@echo "$(RED)>>> Eliminando contenedores y volumenes...$(RESET)"
	$(COMPOSE) down -v --remove-orphans
	@echo "$(GREEN)>>> Proyecto destruido$(RESET)"

reset: ## Destruye y reconstruye todo desde cero
	@echo "$(RED)>>> Reseteando proyecto...$(RESET)"
	$(COMPOSE) down -v --remove-orphans
	$(COMPOSE) up -d --build
	@echo "$(GREEN)>>> Reset completado$(RESET)"
	@echo "$(CYAN)>>> App disponible en: http://localhost:$(PORT)$(RESET)"

nuke: ## Elimina TODO: contenedores, volumenes, imagenes y cache
	@echo "$(RED)>>> NUKE: Eliminando todo...$(RESET)"
	$(COMPOSE) down -v --remove-orphans --rmi local
	docker system prune -f --volumes
	@echo "$(GREEN)>>> Nuke completado$(RESET)"

# =============================================================================
# Variables de entorno y red
# =============================================================================

env-check: ## Verifica que .env existe
	@if [ -f .env ]; then \
		echo "$(GREEN)>>> .env encontrado$(RESET)"; \
	else \
		echo "$(RED)>>> .env no encontrado. Copia .env.example:$(RESET)"; \
		echo "    cp .env.example .env"; \
	fi

env-show: ## Muestra las variables de entorno del contenedor
	@echo "$(CYAN)>>> Variables de entorno:$(RESET)"
	@docker exec $(CONTAINER) env 2>/dev/null | sort || echo "$(RED)Contenedor no encontrado$(RESET)"

url: ## Muestra la URL de la aplicacion
	@echo "$(CYAN)>>> http://localhost:$(PORT)$(RESET)"

ports: ## Muestra los puertos mapeados
	@echo "$(CYAN)>>> Puertos:$(RESET)"
	@docker port $(CONTAINER) 2>/dev/null || echo "$(RED)Contenedor no encontrado$(RESET)"

network-inspect: ## Inspecciona la red del proyecto
	@echo "$(CYAN)>>> Red del proyecto:$(RESET)"
	@docker network inspect unicon_unicon_network 2>/dev/null | head -30 || echo "$(RED)Red no encontrada$(RESET)"
